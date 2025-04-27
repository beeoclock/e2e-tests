import {ServiceEnum} from "../../../support/ServiceEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";
import {NewContextPages} from "support/beeoclock/page-element/configuration/new-context/NewContextPages";
import {UpdateBusinessProfileBuilder} from "support/beeoclock/common/Interception/new-context/builder/UpdateBusinessProfileBuilder";
import {LeftMenuPage} from "support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "../../../support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {BusinessSettingsPages} from "../../../support/beeoclock/page-element/configuration/tab/business-settings/BusinessSettingsPages";

describe('new context test creation', () => {
    let schedulePage: any

    before('setup environment', (): void => {
        schedulePage = NewContextPages.NewContextSchedulesPage
    })

    beforeEach('login', () => {
        login()
    })

    it('should create new context', function (): void {
        cy.log('click on add new context link')
        NewContextPages.SelectNewContextPage.clickSelectNewContextLink()

        cy.log('assert page 1 & click on start button')
        NewContextPages.NewContextIntroductionPage
            .assertState()
            .clickBeginButton()

        cy.log('assert page 2 & fill company name and click next button')
        NewContextPages.NewContextCompanyNamePage
            .assertState()
            .typeCompanyName('companyName')
            .clickNextButton()

        cy.log('assert page 3 & fill address of industry information')
        NewContextPages.NewContextPointOfSalePage
            .assertState()
            .selectCountry('Polska')
            .typeCity('Warszawa')
            .typeZipCode('10-100')
            .typeFirstAddress('Krakowskie przedmieście 178/12A')
            .typeSecondAddress('Argentyńska 270B/490')
            .clickNextButton()

        cy.log('assert page 4 & configure schedule of industry')
        NewContextPages.NewContextSchedulesPage
            .assertState()
            .assertGivenDayIsSelected(schedulePage.dayIndex.monday)
            .assertGivenDayIsSelected(schedulePage.dayIndex.tuesday)
            .assertGivenDayIsSelected(schedulePage.dayIndex.wednesday)
            .assertGivenDayIsSelected(schedulePage.dayIndex.thursday)
            .assertGivenDayIsSelected(schedulePage.dayIndex.friday)

            .assertGivenDayIsNotSelected(schedulePage.dayIndex.saturday)
            .assertGivenDayIsNotSelected(schedulePage.dayIndex.sunday)

            .clickOnGivenDay(schedulePage.dayIndex.sunday)
            .clickOnGivenDay(schedulePage.dayIndex.monday)

            .assertGivenDayIsNotSelected(schedulePage.dayIndex.monday)
            .assertGivenDayIsNotSelected(schedulePage.dayIndex.saturday)

            .assertGivenDayIsSelected(schedulePage.dayIndex.sunday)
            .assertGivenDayIsSelected(schedulePage.dayIndex.tuesday)
            .assertGivenDayIsSelected(schedulePage.dayIndex.wednesday)
            .assertGivenDayIsSelected(schedulePage.dayIndex.thursday)
            .assertGivenDayIsSelected(schedulePage.dayIndex.friday)

            .typeTimeStart('11:00')
            .typeTimeEnd('20:00')
            .clickNextButton()

        cy.log('assert page 5 & fill language and timezone information')
        NewContextPages.NewContextLanguagePage
            .assertState()
            .assertSelectedLanguage('Polski')
            .selectGivenLanguage('English')
            .selectMainEmailLanguage('English')
            .assertMainEmailLanguage('English')
            .assertTimezone("Europe/Warsaw")
            .assertCurrency("PLN")
            .clickNextButton()

        NewContextPages.NewContextServicePage
            .assertState()
            .clickAddServiceButton()
            .typeServiceTitle('New service')
            .typeServiceDescription('description of the service')
            .typeServicePrice('200')
            .clickSaveButton()
            .assertCreatedService('New service', '200 zł', '45min')

        const expectedBody = buildBusinessUpdate();
        NewContextPages.NewContextServicePage
            .clickCreateButton('companyName', expectedBody)

        cy.log('Delete business context')

        LeftMenuPage.clickOnGivenTab(TabNameEnum.BUSINESS_SETTINGS, true);
        BusinessSettingsPages.BusinessProfileDeletionPage
            .clickDeleteButton()
            .clickDeleteButtonOnModal('companyName')
        PanelLoginPage.assertGivenBusinessLength(3)
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

    function buildBusinessUpdate(): any {
        return new UpdateBusinessProfileBuilder()
            .setPublished(1)
            .addSchedule({
                workDays: [2, 3, 4, 5, 7],
                startInSeconds: 39600,
                endInSeconds: 72000
            })
            .addAddress({
                object: "Address",
                country: "PL",
                city: "Warszawa",
                zipCode: "10-100",
                streetAddressLineOne: "Krakowskie przedmieście 178/12A",
                streetAddressLineTwo: "Argentyńska 270B/490",
                customLink: null
            })
            .build();
    }
});

