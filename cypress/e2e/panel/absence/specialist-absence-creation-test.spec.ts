import {QueryAssertion} from "../../../support/beeoclock/common/assertion/QueryAssertion";
import {CalendarPages} from "../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "../../../support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {AbsencePages} from "../../../support/beeoclock/page-element/configuration/tab/absence/AbsencePages";
import {AbsenceActionEnum} from "../../../support/beeoclock/page-element/configuration/tab/absence/absence-action/enum/AbsenceActionEnum";
import {TestCaseEnum} from "../../../fixtures/enum/TestCaseEnum";
import {PanelAbsenceCreationDataProvider} from "../../../fixtures/panel/absence/PanelAbsenceCreationDataProvider";
import {AbsenceColumnRowEnum} from "../../../support/beeoclock/page-element/configuration/tab/absence/table-verifier/enum/AbsenceColumnRowEnum";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {SpecialistNameEnum} from "../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {CalendarTableTimeEnum} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";
import {AbsenceApi} from "../../../support/beeoclock/backend/panel/absence/AbsenceApi";

describe('specialist absence creation test', () => {

    before('clear environment', () => {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
    })

    it('test panel absence creation service', function () {
        const testCases = [
            TestCaseEnum.CASE_1,
            TestCaseEnum.CASE_2
        ];

        cy.loginOnPanel()

        cy.get('@token').then(token => {
            cy.log('token: ' + token);
            AbsenceApi.deleteAllAbsences()
        });

        cy.log('assert login url');
        QueryAssertion.verifyCorrectUrl('/event/calendar-with-specialists');

        cy.log('currentDate')
        CalendarPages.CalendarNavigationPage
            .verifyCurrenDate()
        cy.log('next date')
        CalendarPages.CalendarNavigationPage
            .clickNextDayArrow()
            .verifyNextDayDate();

        testCases.forEach(testCase => {
            const testData = PanelAbsenceCreationDataProvider.getTestData(testCase);

            cy.log(`add absence on calendar panel for ${testCase}`)
            CalendarPages.CalendarTablePage
                .clickOnGivenAndHour(testData.specialist, testData.time);
            RightPanelPages.BreakScienceGivenTimePage
                .verifySelectedNextDayTimeLabel(testData.selectedTime)
                .verifySelectedSpecialistLabel(testData.specialist)
                .clickAbsenceButton()
                .clickBreakRange(testData.absenceRange)
            RightPanelPages.AbsencePage
                .verifyAbsenceFromDate(testData.absenceFromDate)
                .verifyAbsenceFromTime(testData.absenceFromTime)
                .verifyAbsenceToDate(testData.absenceToDate)
                .verifyAbsenceToTime(testData.absenceToTime)
                .typeAbsenceNote(testData.absenceNote)
                .clickSaveButton()

            CalendarPages.CalendarTablePage
                .assertAbsenceOnTable(testData.assertTableAbsence)

            RightPanelPages.RightPanelNavigationPage
                .clickCloseRightPanel()

            LeftMenuPage.clickOnGivenTab(TabNameEnum.ABSENCE)

            AbsencePages.AbsenceTableVerifier
                .verifyGivenRow(testData.absenceNote, AbsenceColumnRowEnum.TYPE, 'Przerwa')
                .verifyGivenRow(testData.absenceNote, AbsenceColumnRowEnum.PROGRESS_STATUS, 'Zaplanowane')
                .verifyGivenRow(testData.absenceNote, AbsenceColumnRowEnum.ATTENDEES, '1')
                .verifyGivenRow(testData.absenceNote, AbsenceColumnRowEnum.START, DateUtils.getCurrentDatePlusDays(1) + ', ' + testData.absenceFromTime)
                .verifyGivenRow(testData.absenceNote, AbsenceColumnRowEnum.END, DateUtils.getCurrentDatePlusDays(1) + ', ' + testData.absenceToTime)
                .verifyGivenRow(testData.absenceNote, AbsenceColumnRowEnum.CREATED_AT, DateUtils.getCurrentDate() + ', ' + DateUtils.getCurrentHour())
            AbsencePages.AbsenceActionPage
                .clickActionButton()
                .clickGivenAction(AbsenceActionEnum.DEACTIVATE)
            AbsencePages.AbsenceTableVerifier
                .verifyGivenRow(testData.absenceNote, AbsenceColumnRowEnum.PROGRESS_STATUS, 'Anulowana')
            AbsencePages.AbsenceActionPage
                .clickGivenAction(AbsenceActionEnum.DELETE)
            LeftMenuPage.clickOnGivenTab(TabNameEnum.CALENDAR)
        })

        cy.log(`add absence on calendar panel`)
        CalendarPages.CalendarTablePage
            .clickOnGivenAndHour(SpecialistNameEnum.E2E_E2E, CalendarTableTimeEnum.Hour_15);
        CalendarPages.CalendarNavigationPage
            .clickPreviousDayArrow()
            .verifyCurrenDate()

        RightPanelPages.BreakScienceGivenTimePage
            .clickAbsenceButton()
            .clickBreakRangeScienceNow('5')
        let dataFrom: string = DateUtils.getCurrentHourWithMinutes()
        let dataTo: string = DateUtils.getHourWithAddedMinutes(5)

        RightPanelPages.AbsencePage
                .verifyAbsenceFromDate(DateUtils.formatDateDaysAhead(0))
                .verifyAbsenceFromTime(dataFrom)
                .verifyAbsenceToDate(DateUtils.formatDateDaysAhead(0))
                .verifyAbsenceToTime(dataTo)
                .typeAbsenceNote('SZYBKA PRZERWA')
                .clickSaveButton()

        ////
        CalendarPages.CalendarTablePage
            .assertAbsenceOnTable(dataFrom + ' - ' + dataTo + '\nPrzerwa')

        RightPanelPages.RightPanelNavigationPage
            .clickCloseRightPanel()

        LeftMenuPage.clickOnGivenTab(TabNameEnum.ABSENCE)

        AbsencePages.AbsenceTableVerifier
            .verifyGivenRow('SZYBKA PRZERWA', AbsenceColumnRowEnum.TYPE, 'Przerwa')
            .verifyGivenRow('SZYBKA PRZERWA', AbsenceColumnRowEnum.PROGRESS_STATUS, 'W trakcie')
            .verifyGivenRow('SZYBKA PRZERWA', AbsenceColumnRowEnum.ATTENDEES, '1')
            .verifyGivenRow('SZYBKA PRZERWA', AbsenceColumnRowEnum.START, DateUtils.getCurrentDatePlusDays(0) + ', ' + dataFrom)
            .verifyGivenRow('SZYBKA PRZERWA', AbsenceColumnRowEnum.END, DateUtils.getCurrentDatePlusDays(0) + ', ' + dataTo)
            .verifyGivenRow('SZYBKA PRZERWA', AbsenceColumnRowEnum.CREATED_AT, DateUtils.getCurrentDate() + ', ' + DateUtils.getCurrentHour())
        AbsencePages.AbsenceActionPage
            .clickActionButton()
            .clickGivenAction(AbsenceActionEnum.DEACTIVATE)
        AbsencePages.AbsenceTableVerifier
            .verifyGivenRow('SZYBKA PRZERWA', AbsenceColumnRowEnum.PROGRESS_STATUS, 'Anulowana')
        AbsencePages.AbsenceActionPage
            .clickGivenAction(AbsenceActionEnum.DELETE)
        LeftMenuPage.clickOnGivenTab(TabNameEnum.CALENDAR)
    })
});