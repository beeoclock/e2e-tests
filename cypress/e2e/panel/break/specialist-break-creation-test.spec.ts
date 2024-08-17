import {ServiceEnum} from "../../../support/beeoclock/common/enum/ServiceEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";
import {BusinessNameEnum} from "../../../support/beeoclock/page-element/common/enum/BusinessNameEnum";
import {QueryAssertion} from "../../../support/beeoclock/common/assertion/QueryAssertion";
import {CalendarPages} from "../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {SpecialistNameEnum} from "../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {
    CalendarTableTimeEnum
} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";

describe('panel new customer order service', () => {

    it('test panel new customer order service', function () {

        cy.intercept('GET', '**/*').as('getAll');
        cy.visit(ServiceEnum.CLIENT_PANEL, {
            failOnStatusCode: false,
            onBeforeLoad: (win) => {
                win.localStorage.setItem('language', 'pl');
            }
        });

        cy.wait('@getAll', {timeout: 30000});

        cy.log('login');
        PanelLoginPageElement.EmailInput.getElement();
        PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN);
        PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD);
        PanelLoginPage.clickLoginButton();
        PanelLoginPage.selectGivenBusiness(BusinessNameEnum.HAIRCUT_AND_BARBER);

        cy.get('@token').then(token => {
            cy.log('token: ' + token);
        });

        cy.log('assert login url');
        QueryAssertion.verifyCorrectUrl('/event/calendar-with-specialists');

        CalendarPages.CalendarNavigationPage
            .verifyCurrenDate()
            .clickNextDayArrow()
            .verifyNextDayDate();
        CalendarPages.CalendarTablePage
            .clickOnGivenAndHour(SpecialistNameEnum.ZALEWSKI, CalendarTableTimeEnum.Hour_12);
        RightPanelPages.BreakScienceGivenTimePage
            .verifySelectedNextDayTimeLabel(CalendarTableTimeEnum.Hour_12.toString())
            .clickBreakRange('30')
        RightPanelPages.AbsencePage
            .verifyAbsenceFromDate(DateUtils.formatDateDaysAhead(1))
            .verifyAbsenceFromTime(CalendarTableTimeEnum.Hour_12.toString())
            .verifyAbsenceToDate(DateUtils.formatDateDaysAhead(1))
            .verifyAbsenceToTime(CalendarTableTimeEnum.Hour_12.toString() + ':30')
            .typeAbsenceNote('Jutrzejszy obiad Tomka')
            .clickSaveButton()
    })
});