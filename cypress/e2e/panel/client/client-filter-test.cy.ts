import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {TableCommonPage} from "../../../support/beeoclock/page-element/configuration/tab/common/table/TableCommonPage";
import {ClientTableCellEnum} from "../../../support/beeoclock/page-element/configuration/tab/client/enum/ClientTableCellEnum";
import {CustomerApi} from "../../../support/beeoclock/backend/panel/customer/CustomerApi";
import {CustomerSearchCriteriaBuilder} from "../../../support/beeoclock/backend/panel/customer/queries/CustomerSearchCriteriaBuilder";
import {BackendCommonEnum} from "../../../support/beeoclock/backend/enum/BackendCommonEnum";
import {CustomerStateEnum} from "../../../support/beeoclock/backend/panel/customer/enum/CustomerStateEnum";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {ICustomerSearchCriteria} from "../../../support/beeoclock/backend/panel/customer/queries/ICustomerSearchCriteria";

describe('client filter test', () => {
    let testData: any
    let createdAt: string
    let updatedAt: string

    beforeEach('login', (): void => {
        cy.session('login', (): void => {
            cy.loginOnPanel()
            LeftMenuPage.assertIsSynchronized(true)
        })

        cy.visit('https://crm.dev.beeoclock.com/662a4637a4b376d20c065b1d/customer/list')
    })

    // it.only('test data', () => {
    //     cy.log('crated at: ' + createdAt)
    //     cy.log('updated at: ' + updatedAt)
    //     const parsedCreatedAt = DateUtils.formatDateToPolishStyle(createdAt)
    //     const parsedUpdatedAt = DateUtils.formatDateToPolishStyle(updatedAt)
    //     expect(parsedCreatedAt).to.equal('3.11.2024, 20:03')
    //     expect(parsedUpdatedAt).to.equal('20.05.2025, 20:59')
    // })

    it('should filter clients by first name', (): void => {
        cy.log('wait for synchronization - only once')

        RightPanelPages.ClientFilterPage
            .typeSearchValue(testData.firstName)

        cy.log('assert properties on table')
        assertTable()
    })

    it('should filter clients by last name', (): void => {
        RightPanelPages.ClientFilterPage
            .typeSearchValue(testData.lastName)

        cy.log('assert properties on table')
        assertTable()
    })

    it('should filter clients by email', (): void => {
        RightPanelPages.ClientFilterPage
            .typeSearchValue(testData.email)
        assertTable()
    })

    it('should filter clients by phone number', (): void => {
        RightPanelPages.ClientFilterPage
            .typeSearchValue(testData.phoneNumber)

        cy.log('assert properties on table')
        assertTable()
    })

    it('should filter clients by note', (): void => {
        RightPanelPages.ClientFilterPage
            .typeSearchValue(testData.note)

        cy.log('assert properties on table')
        assertTable()
    })

    before('setup', (): void => {
        cy.wrap(null).then((): void => {

            testData = {
                firstName: 'tester',
                lastName: 'maila',
                email: 'jan.zaduminski@beeoclock.com',
                phoneNumber: '484848111222333',
                note: 'ABA45216165555CYX'
            }

            const customer: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
                .withTenantId(BackendCommonEnum.X_Business_Tenant_Id)
                .withState(CustomerStateEnum.ACTIVE)
                .withPhrase(testData.email)
                .withOrderBy('createdAt')
                .withOrderDir('desc')
                .withPage(1)
                .withPageSize(1)
                .build()
            CustomerApi.getCustomerPaged(customer, {})
                .then((response: any): void => {
                    expect(response).to.have.property('items').that.is.an('array').with.length.greaterThan(0);

                    const customerResponse: any = response.items[0];

                    const returnedCreatedAt: string = customerResponse.createdAt;
                    const returnedUpdatedAt: string = customerResponse.updatedAt;

                    createdAt = DateUtils.formatDateToPolishStyle(returnedCreatedAt)
                    updatedAt = DateUtils.formatDateToPolishStyle(returnedUpdatedAt)
                })
        })
    })

    function assertTable(): void {
        TableCommonPage
            .verifyTableRowElement(testData.firstName, ClientTableCellEnum.FIRST_NAME, testData.firstName)
            .verifyTableRowElement(testData.firstName, ClientTableCellEnum.LAST_NAME, testData.lastName)
            .verifyTableRowElement(testData.firstName, ClientTableCellEnum.EMAIL, testData.email)
            .verifyTableRowElement(testData.firstName, ClientTableCellEnum.PHONE, testData.phoneNumber)
            .verifyTableRowElement(testData.firstName, ClientTableCellEnum.STATUS, 'Aktywny')
            .verifyTableRowElement(testData.firstName, ClientTableCellEnum.CREATED_AT, createdAt)
            .verifyTableRowElement(testData.firstName, ClientTableCellEnum.UPDATED_AT, updatedAt)
        TableCommonPage.assertTableCount(1)
    }
})