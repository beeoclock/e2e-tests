import {ServiceEnum} from "../../../support/beeoclock/common/enum/ServiceEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";
import { NewContextPages } from "support/beeoclock/page-element/configuration/new-context/NewContextPages";

describe('new context test creation', () => {

    beforeEach('login', () => {
        login()
    })
    //
    it('should create new context', function(): void {
        NewContextPages.SelectNewContextPage.clickSelectNewContextLink()

        NewContextPages.NewContextIntroductionPage
            .assertState()
            .clickBeginButton()

        NewContextPages.NewContextCompanyNamePage
            .assertState()
            .typeCompanyName('companyName')
            .clickNextButton()

        NewContextPages.NewContextSelectIndustryPage
            .assertTitle()
            .assertState()
            .assertLearningIndustryElement()
            .assertCosmeticIndustryElement()
            .assertHealthCareIndustryElement()
            .assertOtherIndustryElement()
            .assertElementLength(4)
            .clickOnGivenIndustry(NewContextPages.NewContextSelectIndustryPage.industryNames.healthcare)
    });

    function login(): void {
        cy.visit(ServiceEnum.CLIENT_PANEL, {
            failOnStatusCode: false,
            onBeforeLoad: (win) => {
                win.sessionStorage.clear();
                win.localStorage.clear();
                win.sessionStorage.clear();
                win.localStorage.setItem('language', 'pl');
            }
        });

        cy.get('.text-start', {timeout: 30000}).scrollIntoView().should('be.visible')
        PanelLoginPageElement.EmailInput.getElement();
        PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN);
        PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD);
        PanelLoginPage.clickLoginButton();
    }
});

