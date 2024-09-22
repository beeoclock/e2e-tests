import {TestCaseEnum} from "../../../fixtures/enum/TestCaseEnum";
import {QueryAssertion} from "../../../support/beeoclock/common/assertion/QueryAssertion";
import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {CalendarPages} from "../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {CommonElementPage} from "../../../support/beeoclock/page-element/common/common-element/CommonElementPage";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {CommonPropertiesEnum} from "../../../support/beeoclock/page-element/common/enum/CommonPropertiesEnum";
import {faker} from "@faker-js/faker";
import {ClientCreationDataProvider} from "../../../fixtures/panel/client/ClientCreationDataProvider";

describe('customer creation test', () => {

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

        LeftMenuPage.clickClientTab();

        testCases.forEach(testCase => {
            const testData = ClientCreationDataProvider.getTestData(testCase);

            cy.log('add button')
            CommonElementPage.clickAddResourceButton()

            cy.log('creation')
            RightPanelPages.ClientFormPage
                .typeGivenCustomerInput(CommonPropertiesEnum.FIRST_NAME, testData.firstName)
                .typeGivenCustomerInput(CommonPropertiesEnum.LAST_NAME, testData.lastName)
                .typeGivenCustomerInput(CommonPropertiesEnum.EMAIL, testData.email)
                .typeGivenCustomerInput(CommonPropertiesEnum.PHONE, testData.phoneNumber)
                .typeClientDescription(testData.description)
                .clickSaveButton()

            cy.log('assertion')
            RightPanelPages.ClientFilterPage
                .typeSearchValue(testData.firstName + " " + testData.lastName)
        })
    })
});