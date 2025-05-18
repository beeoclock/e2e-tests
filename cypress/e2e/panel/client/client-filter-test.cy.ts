import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {TableCommonPage} from "../../../support/beeoclock/page-element/configuration/tab/common/table/TableCommonPage";
import {ClientTableCellEnum} from "../../../support/beeoclock/page-element/configuration/tab/client/enum/ClientTableCellEnum";
import {EnvEnum} from "../../../support/beeoclock/common/enum/EnvEnum";

describe('client filter test', () => {

    beforeEach('login', () => {
        cy.loginOnPanel()
        LeftMenuPage.assertIsSynchronized(true)
        LeftMenuPage.clickClientTab();
    })

    it('should filter clients by first name', () => {
        RightPanelPages.ClientFilterPage
            .typeSearchValue('maila')

        // TableCommonPage
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.FIRST_NAME, testData.firstName)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.LAST_NAME, testData.lastName)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.EMAIL, testData.email)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.PHONE, testData.phoneNumber)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.STATUS, 'Aktywny')
        // TableCommonPage.assertTableCount(1)
    })

    it('should filter clients by last name', () => {
        RightPanelPages.ClientFilterPage
            .typeSearchValue('maila')

        // TableCommonPage
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.FIRST_NAME, testData.firstName)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.LAST_NAME, testData.lastName)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.EMAIL, testData.email)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.PHONE, testData.phoneNumber)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.STATUS, 'Aktywny')
        // TableCommonPage.assertTableCount(1)
    })

    it('should filter clients by email', () => {
        RightPanelPages.ClientFilterPage
            .typeSearchValue(Cypress.env(EnvEnum.MAIL_LOGIN))

        // TableCommonPage
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.FIRST_NAME, testData.firstName)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.LAST_NAME, testData.lastName)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.EMAIL, testData.email)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.PHONE, testData.phoneNumber)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.STATUS, 'Aktywny')
        // TableCommonPage.assertTableCount(1)
    })

    it('should filter clients by phone number', () => {
        RightPanelPages.ClientFilterPage
            .typeSearchValue(Cypress.env(EnvEnum.MAIL_LOGIN))

        // TableCommonPage
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.FIRST_NAME, testData.firstName)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.LAST_NAME, testData.lastName)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.EMAIL, testData.email)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.PHONE, testData.phoneNumber)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.STATUS, 'Aktywny')
        // TableCommonPage.assertTableCount(1)
    })

    it('should filter clients by note', () => {
        RightPanelPages.ClientFilterPage
            .typeSearchValue(Cypress.env(EnvEnum.MAIL_LOGIN))

        // TableCommonPage
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.FIRST_NAME, testData.firstName)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.LAST_NAME, testData.lastName)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.EMAIL, testData.email)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.PHONE, testData.phoneNumber)
        //     .verifyTableRowElement(testData.firstName, ClientTableCellEnum.STATUS, 'Aktywny')
        // TableCommonPage.assertTableCount(1)
    })
})