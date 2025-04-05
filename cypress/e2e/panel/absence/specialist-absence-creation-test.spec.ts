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
import {SpecialistNameEnum} from "support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {CalendarTableTimeEnum} from "support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";
import {AbsenceApi} from "support/beeoclock/backend/panel/absence/AbsenceApi";
import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";
import {TableCommonPage} from "../../../support/beeoclock/page-element/configuration/tab/common/table/TableCommonPage";

describe('specialist absence creation test', () => {

    beforeEach('setup', () => {
        cy.loginOnPanel()

        AbsenceApi.deleteAllAbsences()
        OrderApi.deleteAllCurrentOrdersWithAssertion()
        LeftMenuPage.assertIsSynchronized(true)
    })

    it('test panel absence creation service', function () {
        const testCases = [
            TestCaseEnum.CASE_1,
            TestCaseEnum.CASE_2
        ];

        cy.log('select next date with assert')
        CalendarPages.CalendarNavigationPage
            .clickNextDayArrow()
            .verifyNextDayDate();

        testCases.forEach(testCase => {
            const testData = PanelAbsenceCreationDataProvider.getTestData(testCase);

            cy.log(`add absence on calendar panel for ${testCase}`)
            CalendarPages.CalendarTablePage
                .clickOnGivenAndHour(testData.specialist, testData.time, 1);
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

            LeftMenuPage.clickOnGivenTab(TabNameEnum.ABSENCE)

            TableCommonPage
                .verifyTableRowElement(testData.absenceNote, AbsenceColumnRowEnum.TYPE, 'Przerwa')
                .verifyTableRowElement(testData.absenceNote, AbsenceColumnRowEnum.STATUS, 'Zaplanowane')
                .verifyTableRowElement(testData.absenceNote, AbsenceColumnRowEnum.ATTENDEES, '1')
                .verifyTableRowElement(testData.absenceNote, AbsenceColumnRowEnum.START, DateUtils.getCurrentDatePlusDays(1) + ', ' + testData.absenceFromTime)
                .verifyTableRowElement(testData.absenceNote, AbsenceColumnRowEnum.END, DateUtils.getCurrentDatePlusDays(1) + ', ' + testData.absenceToTime)

                .clickActionButton(testData.absenceNote)
                .clickGivenActionButton(AbsenceActionEnum.DEACTIVATE)

            AbsencePages.AbsenceTableVerifier
                .verifyGivenRowNotExist(testData.absenceNote)
                .verifyTableIsEmpty()
            LeftMenuPage.clickOnGivenTab(TabNameEnum.CALENDAR)
        })
    })

    it('should create absence science given time', function (): void {
        cy.log(`add absence on calendar panel`)
        CalendarPages.CalendarTablePage
            .clickOnGivenAndHour(SpecialistNameEnum.E2E_E2E, CalendarTableTimeEnum.Hour_15);

        RightPanelPages.BreakScienceGivenTimePage
            .clickAbsenceButton()
            .clickBreakRangeScienceNow('5')
        let dataFrom: string = DateUtils.getCurrentHourWithMinutes()
        let dataTo: string = DateUtils.getHourWithAddedMinutes(5)

        RightPanelPages.AbsencePage
            .assertCurrentTimeMatches()
            .verifyAbsenceFromTime(dataFrom)
            .verifyAbsenceToDate(DateUtils.formatDateDaysAhead(0))
            .verifyAbsenceToTime(dataTo)
            .typeAbsenceNote('SZYBKA PRZERWA')
            .clickSaveButton()

        CalendarPages.CalendarTablePage
            .assertAbsenceOnTable( 'Przerwa\n' +dataFrom + ' - ' + dataTo)

        LeftMenuPage.clickOnGivenTab(TabNameEnum.ABSENCE)

        TableCommonPage
            .verifyTableRowElement('SZYBKA PRZERWA', AbsenceColumnRowEnum.TYPE, 'Przerwa')
            .verifyTableRowElement('SZYBKA PRZERWA', AbsenceColumnRowEnum.STATUS, 'W trakcie')
            .verifyTableRowElement('SZYBKA PRZERWA', AbsenceColumnRowEnum.ATTENDEES, '1')
            .verifyTableRowElement('SZYBKA PRZERWA', AbsenceColumnRowEnum.START, DateUtils.getCurrentDatePlusDays(0) + ', ' + dataFrom)
            .verifyTableRowElement('SZYBKA PRZERWA', AbsenceColumnRowEnum.END, DateUtils.getCurrentDatePlusDays(0) + ', ' + dataTo)
            .verifyTableRowElement('SZYBKA PRZERWA', AbsenceColumnRowEnum.CREATED_AT, DateUtils.getCurrentDate() + ', ' + DateUtils.getCurrentHourWithMinutes())
            .clickActionButton('SZYBKA PRZERWA')
            .clickGivenActionButton(AbsenceActionEnum.DEACTIVATE)

        AbsencePages.AbsenceTableVerifier
            .verifyGivenRowNotExist('SZYBKA PRZERWA')
        LeftMenuPage.clickOnGivenTab(TabNameEnum.CALENDAR)
    })
});