import {ServiceEnum} from "../../../support/beeoclock/common/enum/ServiceEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";
import {CustomerBuilder} from "support/beeoclock/backend/panel/customer/create/CustomerBuilder";
import {CustomerFactory} from "../../../support/beeoclock/backend/panel/customer/factory/CustomerFactory";
import { ICustomer } from "support/beeoclock/backend/panel/customer/create/ICustomer";
import {CustomerApi} from "../../../support/beeoclock/backend/panel/customer/CustomerApi";

describe('customer api test', () => {
    let token: string

    before('login and get valid token', () => {
        cy.log('visit');
        loginAndStoreToken()

        cy.get('@token').then(fetchedToken => {
            token = fetchedToken.toString();
            cy.log('Token:', token);
            cy.wrap(token).as('token');
        });
    });

    it('should create customer with minimal properties', () => {
        const customerData = CustomerFactory.createCustomer()

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

        cy.get('@token').then(fetchedToken => {
            token = fetchedToken.toString();
            cy.log('Token:', token);
            cy.wrap(token).as('token');
        });
        cy.log('token ' + token);

        CustomerApi.createCustomerWithBuilder(customer)
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