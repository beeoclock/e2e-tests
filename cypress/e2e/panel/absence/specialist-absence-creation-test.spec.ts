import {QueryAssertion} from "../../../support/beeoclock/common/assertion/QueryAssertion";
import {CalendarPages} from "../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "../../../support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {AbsencePages} from "../../../support/beeoclock/page-element/configuration/tab/absence/AbsencePages";
import {AbsenceActionEnum} from "../../../support/beeoclock/page-element/configuration/tab/absence/absence-action/enum/AbsenceActionEnum";
import {TestCaseEnum} from "../../../fixtures/enum/TestCaseEnum";
import {PanelAbsenceCreationDataProvider} from "../../../fixtures/panel/absence/PanelAbsenceCreationDataProvider";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";

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

            AbsencePages.AbsenceActionPage
                .clickActionButton()
                .clickGivenAction(AbsenceActionEnum.DEACTIVATE)
                .clickGivenAction(AbsenceActionEnum.DELETE)
            LeftMenuPage.clickOnGivenTab(TabNameEnum.CALENDAR)
        })
    })
});