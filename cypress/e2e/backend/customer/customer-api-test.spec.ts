import {ServiceEnum} from "../../../support/beeoclock/common/enum/ServiceEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";
import {CustomerApi} from "../../../support/beeoclock/backend/panel/customer/CustomerApi";
import {ICustomerSearchCriteria} from "../../../support/beeoclock/backend/panel/customer/queries/ICustomerSearchCriteria";
import {CustomerSearchCriteriaBuilder} from "support/beeoclock/backend/panel/customer/queries/CustomerSearchCriteriaBuilder";
import {BackendCommonEnum} from "../../../support/beeoclock/backend/enum/BackendCommonEnum";
import {CustomerFactory} from "support/beeoclock/backend/panel/customer/factory/CustomerFactory";
import {ICustomer} from "support/beeoclock/backend/panel/customer/create/ICustomer";
import {CustomerBuilder} from "support/beeoclock/backend/panel/customer/create/CustomerBuilder";
import {StateEnum} from "../../../support/beeoclock/backend/state-history/StateEnum";
import {HTTPStatusCodeType} from "../../../support/beeoclock/backend/enum/HTTPStatusCodeType";

describe('customer api test', () => {
    let token: string
    let customerData: ICustomer

    before('login and get valid token', () => {
        cy.log('visit');
        loginAndStoreToken()
        cy.get('@token').then(fetchedToken => {
            token = fetchedToken.toString();
            Cypress.env('token', fetchedToken.toString());
        });
    });

    beforeEach('get test data', () => {
        customerData = CustomerFactory.createCustomer();
    })

    it('should create customer with minimal properties and assert its properties', () => {
        const customer: ICustomer = new CustomerBuilder()
            .setFirstName(customerData.firstName)
            .setLastName(customerData.lastName)
            .setPhone(customerData.phone)
            .setEmail(customerData.email)
            .setCustomerType(customerData.customerType)
            .setState(customerData.state)
            .setCreatedAt(customerData.createdAt)
            .setUpdatedAt(customerData.updatedAt)
            .setNote(customerData.note)
            .build();

        CustomerApi.createCustomerWithBuilder(customer, {failOnStatusCode: false})

        const criteria: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
            .withTenantId(BackendCommonEnum.X_Business_Tenant_Id)
            .withOrderBy('name')
            .withOrderDir('asc')
            .withPage(1)
            .withPageSize(10)
            .withPhrase(customerData.email)
            .build();

        CustomerApi.getCustomerPaged(criteria)
            .then(response => {
                cy.log('Response:', JSON.stringify(response));
                expect(response).to.have.property('items').that.is.an('array').with.length.greaterThan(0);

                const customerResponse: any = response.items[0];

                expect(customerResponse).to.have.property('firstName', customerData.firstName);
                expect(customerResponse).to.have.property('lastName', customerData.lastName);
                expect(customerResponse).to.have.property('phone', customerData.phone);
                expect(customerResponse).to.have.property('email', customerData.email);
                expect(customerResponse).to.have.property('customerType', customerData.customerType);
                expect(customerResponse).to.have.property('state', StateEnum.ACTIVE,);

                expect(customerResponse.stateHistory).to.be.an('array').that.is.not.empty;
                expect(customerResponse.stateHistory[0]).to.have.property('state', StateEnum.ACTIVE,);
            });
    })

    it('should get bad request when no contact data', () => {
        const customer: ICustomer = new CustomerBuilder()
            .setFirstName(customerData.firstName)
            .setLastName(customerData.lastName)
            .setPhone('')
            .setEmail('')
            .setCustomerType(customerData.customerType)
            .setState(customerData.state)
            .setCreatedAt(customerData.createdAt)
            .setUpdatedAt(customerData.updatedAt)
            .setNote(customerData.note)
            .build();

        CustomerApi.createCustomerWithBuilder(customer, {failOnStatusCode: false})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.BadRequest);
            })
    });

    it('should get bad request when no names data', () => {
        const customer: ICustomer = new CustomerBuilder()
            .setFirstName('')
            .setLastName('')
            .setPhone(customerData.phone)
            .setEmail(customerData.email)
            .setCustomerType(customerData.customerType)
            .setState(customerData.state)
            .setCreatedAt(customerData.createdAt)
            .setUpdatedAt(customerData.updatedAt)
            .setNote(customerData.note)
            .build();

        CustomerApi.createCustomerWithBuilder(customer, {failOnStatusCode: false})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.BadRequest);
            })
    });

    it('should get bad request when incorrect phone number', () => {
        const customer: ICustomer = new CustomerBuilder()
            .setFirstName(customerData.firstName)
            .setLastName(customerData.lastName)
            .setPhone('5547778321')
            .setEmail(customerData.email)
            .setCustomerType(customerData.customerType)
            .setState(customerData.state)
            .setCreatedAt(customerData.createdAt)
            .setUpdatedAt(customerData.updatedAt)
            .setNote(customerData.note)
            .build();

        CustomerApi.createCustomerWithBuilder(customer, {failOnStatusCode: false})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.BadRequest);
            })
    });

    it('should get bad request when incorrect email value', () => {
        const customer: ICustomer = new CustomerBuilder()
            .setFirstName(customerData.firstName)
            .setLastName(customerData.lastName)
            .setPhone(customerData.phone)
            .setEmail(customerData.phone)
            .setCustomerType(customerData.customerType)
            .setState(customerData.state)
            .setCreatedAt(customerData.createdAt)
            .setUpdatedAt(customerData.updatedAt)
            .setNote(customerData.note)
            .build();

        CustomerApi.createCustomerWithBuilder(customer, {failOnStatusCode: false})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.BadRequest);
            })
    });

    function loginAndStoreToken() {
        cy.visit(ServiceEnum.CLIENT_PANEL, {
            failOnStatusCode: false,
            onBeforeLoad: (win) => {
                win.sessionStorage.clear();
                win.localStorage.clear();
                win.sessionStorage.clear();
                win.localStorage.setItem('language', 'pl');
            }
        });

        cy.log('login');
        PanelLoginPageElement.EmailInput.getElement();
        PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN);
        PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD);
        PanelLoginPage.clickLoginButtonAndStoreToken();
    }

});