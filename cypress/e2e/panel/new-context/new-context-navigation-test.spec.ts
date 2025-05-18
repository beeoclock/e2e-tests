import {ServiceEnum} from "../../../support/ServiceEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {EnvEnum} from "../../../support/beeoclock/common/enum/EnvEnum";
import {NewContextPages} from "../../../support/beeoclock/page-element/configuration/new-context/NewContextPages";

describe('new context navigation', () => {

    beforeEach(() => {
        login()
    })

    it('Should be able to create a new context navigation', () => {
        cy.log('assert page 1 & click on start button')
        NewContextPages.SelectNewContextPage.clickSelectNewContextLink()

        NewContextPages.NewContextIntroductionPage
            .assertState()

        NewContextPages.NewContextNavigationPage
            .clickBackButton()
        PanelLoginPage.assertGivenBusinessLength(3)
    })

    it('Should be able to create a new context navigation', () => {
        cy.log('assert page 1 & click on start button')
        NewContextPages.SelectNewContextPage.clickSelectNewContextLink()

        NewContextPages.NewContextIntroductionPage
            .assertState()
            .clickBeginButton()
        NewContextPages.NewContextCompanyNamePage
            .assertState()
        NewContextPages.NewContextNavigationPage
            .clickBackButton()
        NewContextPages.NewContextIntroductionPage
            .assertState()
    })

    it('Should be able to create a new context navigation', () => {
        cy.log('assert page 1 & click on start button')
        NewContextPages.SelectNewContextPage.clickSelectNewContextLink()

        NewContextPages.NewContextIntroductionPage
            .assertState()
            .clickBeginButton()
        NewContextPages.NewContextCompanyNamePage
            .assertState()
            .typeCompanyName('1234')
            .clickNextButton()
        NewContextPages.NewContextPointOfSalePage
            .assertState()

        NewContextPages.NewContextNavigationPage
            .clickBackButton()
        NewContextPages.NewContextCompanyNamePage
            .assertState()
            .verifyTypedCompanyName('1234')
    })

    it('Should be able to create a new context navigation', () => {
        cy.log('assert page 1 & click on start button')
        NewContextPages.SelectNewContextPage.clickSelectNewContextLink()

        NewContextPages.NewContextIntroductionPage
            .assertState()
            .clickBeginButton()
        NewContextPages.NewContextCompanyNamePage
            .assertState()
            .typeCompanyName('1234')
            .clickNextButton()
        NewContextPages.NewContextPointOfSalePage
            .assertState()
            .clickNextButton()

        NewContextPages.NewContextNavigationPage
            .clickBackButton()
        NewContextPages.NewContextPointOfSalePage
            .assertState()
    })

    it('Should be able to create a new context navigation', () => {
        cy.log('assert page 1 & click on start button')
        NewContextPages.SelectNewContextPage.clickSelectNewContextLink()

        NewContextPages.NewContextIntroductionPage
            .assertState()
            .clickBeginButton()
        NewContextPages.NewContextCompanyNamePage
            .assertState()
            .typeCompanyName('1234')
            .clickNextButton()
        NewContextPages.NewContextPointOfSalePage
            .assertState()
            .clickNextButton()
        NewContextPages.NewContextSchedulesPage
            .assertState()
            .clickNextButton()

        NewContextPages.NewContextNavigationPage
            .clickBackButton()

        NewContextPages.NewContextSchedulesPage
            .assertState()
    })

    it('Should be able to create a new context navigation', () => {
        cy.log('assert page 1 & click on start button')
        NewContextPages.SelectNewContextPage.clickSelectNewContextLink()

        NewContextPages.NewContextIntroductionPage
            .assertState()
            .clickBeginButton()
        NewContextPages.NewContextCompanyNamePage
            .assertState()
            .typeCompanyName('1234')
            .clickNextButton()
        NewContextPages.NewContextPointOfSalePage
            .assertState()
            .clickNextButton()
        NewContextPages.NewContextSchedulesPage
            .assertState()
            .clickNextButton()
        NewContextPages.NewContextLanguagePage
            .assertState()

        NewContextPages.NewContextNavigationPage
            .clickBackButton()

        NewContextPages.NewContextSchedulesPage
            .assertState()
    })

    it('Should be able to create a new context navigation', () => {
        cy.log('assert page 1 & click on start button')
        NewContextPages.SelectNewContextPage.clickSelectNewContextLink()

        NewContextPages.NewContextIntroductionPage
            .assertState()
            .clickBeginButton()
        NewContextPages.NewContextCompanyNamePage
            .assertState()
            .typeCompanyName('1234')
            .clickNextButton()
        NewContextPages.NewContextPointOfSalePage
            .assertState()
            .clickNextButton()
        NewContextPages.NewContextSchedulesPage
            .assertState()
            .clickNextButton()
        NewContextPages.NewContextLanguagePage
            .assertState()
            .clickNextButton()
        NewContextPages.NewContextServicePage
            .assertState()

        NewContextPages.NewContextNavigationPage
            .clickBackButton()

        NewContextPages.NewContextLanguagePage
            .assertState()
    })

    it('Should be able to create a new context navigation', () => {
        cy.log('assert page 1 & click on start button')
        NewContextPages.SelectNewContextPage.clickSelectNewContextLink()

        NewContextPages.NewContextIntroductionPage
            .assertState()
            .clickBeginButton()
        NewContextPages.NewContextCompanyNamePage
            .assertState()
            .typeCompanyName('1234')
            .clickNextButton()
        NewContextPages.NewContextPointOfSalePage
            .assertState()
            .clickNextButton()
        NewContextPages.NewContextSchedulesPage
            .assertState()
            .clickNextButton()
        NewContextPages.NewContextLanguagePage
            .assertState()
            .clickNextButton()
        NewContextPages.NewContextServicePage
            .assertState()

        NewContextPages.NewContextNavigationPage
            .clickBackButton()

        NewContextPages.NewContextLanguagePage
            .assertState()
        NewContextPages.NewContextNavigationPage
            .clickBackButton()
        NewContextPages.NewContextSchedulesPage
            .assertState()
        NewContextPages.NewContextNavigationPage
            .clickBackButton()
        NewContextPages.NewContextPointOfSalePage
            .assertState()
        NewContextPages.NewContextNavigationPage
            .clickBackButton()
        NewContextPages.NewContextCompanyNamePage
            .assertState()
            .verifyTypedCompanyName('1234')
        NewContextPages.NewContextNavigationPage
            .clickBackButton()
        NewContextPages.NewContextIntroductionPage
            .assertState()
        NewContextPages.NewContextNavigationPage
            .clickBackButton()
        PanelLoginPage.assertGivenBusinessLength(3)
    })

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
        PanelLoginPage.typeEmail(EnvEnum.LOGIN);
        PanelLoginPage.typePassword(EnvEnum.PASSWORD);
        PanelLoginPage.clickLoginButton();
    }
})