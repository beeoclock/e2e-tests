import {ServiceEnum} from "../../../support/beeoclock/common/enum/ServiceEnum";
import {QueryAssertion} from "../../../support/beeoclock/common/assertion/QueryAssertion";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {ServiceNameEnum} from "../../../support/beeoclock/page-element/common/enum/ServiceNameEnum";
import {SpecialistNameEnum} from "../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {CalendarPages} from "../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {
    CalendarTableTimeEnum
} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";
import {BusinessNameEnum} from "../../../support/beeoclock/page-element/common/enum/BusinessNameEnum";


describe('panel - order service', () => {
    let nextDayData = DateUtils.getCurrentDateWithGivenFormat("YYYY-MM-DD")
    const timeString = DateUtils.getCurrentTimePlusOneHourFormatted()
    const datetimeInput = DateUtils.convertDateToDatetimeInput(nextDayData, timeString);
    const dateOrderSummary: string = DateUtils.convertDatetimeToCustomFormat(datetimeInput)
    let dataAssert = nextDayData + '18:00'
    let dataAssertValue = "18:00 - 19:30    Strzyżenie Brody   📓 usuń mnie"

    it('test panel  order service', function () {
        cy.intercept('GET', '**/*').as('getAll');
        cy.visit(ServiceEnum.CLIENT_PANEL, {
            failOnStatusCode: false,
            onBeforeLoad: (win) => {
                win.localStorage.setItem('language', 'pl');
            }
        });
        cy.wait('@getAll', {timeout: 30000});

        cy.log('login')
        PanelLoginPageElement.EmailInput.getElement()
        PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN)
        PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD)
        PanelLoginPage.clickLoginButton()
        PanelLoginPage.selectGivenBusiness(BusinessNameEnum.HAIRCUT_AND_BARBER)

        cy.log('assert login url')
        QueryAssertion.verifyCorrectUrl('/event/calendar-with-specialists')

        cy.log('add order on calendar panel')
        CalendarPages.CalendarTablePage
            .clickOnGivenDayPlusOneHour(SpecialistNameEnum.ZALEWSKI, CalendarTableTimeEnum.Hour_18)
        RightPanelPages.RightPanelServicesPage
            .clickAddOrderButton()
            .clickAddServiceButton()
            .clickSelectServiceButton()
            .selectSpecificService(ServiceNameEnum.BREAD_TRIM)
            .verifySelectedService(ServiceNameEnum.BREAD_TRIM, ServiceNameEnum.BREAD_TRIM_DESCRIPTION)
            .selectOrderTime('1 godz, 30 min')
            .selectPriceOfService('40')
            .selectSpecialist(SpecialistNameEnum.ZALEWSKI_LAST_NAME)
            .typePublicNoteInput('usuń mnie')
            .clickAddButton()
        RightPanelPages.SummaryAndPaymentServicePage
            // .verifyOrderPrice('zł40,00')TODO BUG
            .verifyOrderTime('1 godz, 30 min')
            .verifyOrderDate(dataAssert)
            .verifyOrderService(ServiceNameEnum.BREAD_TRIM)
            .verifyOrderSpecialist(SpecialistNameEnum.ZALEWSKI)
            .verifyOrderCustomer('Anonimowy')
            .selectPaymentMethod('Karta')
            .selectPaymentStatus('W toku')
            .typeBusinessNote('USUŃ MNIE - wartość do wyszukania na ekranie usług')
            .clickSaveButton()

        cy.log('verify its order on table')
        CalendarPages.CalendarTablePage
            .findAndVerifyOrderTableElement(SpecialistNameEnum.ZALEWSKI_FIRST_NAME, SpecialistNameEnum.ZALEWSKI_LAST_NAME)
            .verifyTimeOrderOnTable(SpecialistNameEnum.ZALEWSKI_FIRST_NAME, SpecialistNameEnum.ZALEWSKI_LAST_NAME, dataAssertValue)

        cy.log('click, delete and verify deletion on table')
        CalendarPages.CalendarTablePage
            .clickOrderTableElement(SpecialistNameEnum.ZALEWSKI_FIRST_NAME, SpecialistNameEnum.ZALEWSKI_LAST_NAME)

        //TODO
        cy.log('create next order')
    })

    after('clear storage', () => {
        cy.clearAllLocalStorage()
        cy.clearAllCookies()
    })
})
