import {CustomerApi} from "../../../../support/beeoclock/backend/panel/customer/CustomerApi";
import {ICustomerSearchCriteria} from "../../../../support/beeoclock/backend/panel/customer/queries/ICustomerSearchCriteria";
import {CustomerSearchCriteriaBuilder} from "support/beeoclock/backend/panel/customer/queries/CustomerSearchCriteriaBuilder";
import {BackendCommonEnum} from "../../../../support/beeoclock/backend/enum/BackendCommonEnum";
import {CustomerFactory} from "support/beeoclock/backend/panel/customer/factory/CustomerFactory";
import {ICustomer} from "support/beeoclock/backend/panel/customer/create/ICustomer";
import {CustomerBuilder} from "support/beeoclock/backend/panel/customer/create/CustomerBuilder";
import {HTTPStatusCodeType} from "../../../../support/beeoclock/backend/enum/HTTPStatusCodeType";
import {faker} from "@faker-js/faker";
import {StateEnum} from "support/beeoclock/backend/panel/order/enum/StateEnum";

describe('customer api test', () => {
    let customerData: ICustomer

    beforeEach('get test data', () => {
        customerData = CustomerFactory.createCustomer();
    })

    afterEach('delete customer after each test', () => {
        CustomerApi.deleteCustomer(customerData._id, {})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
            })
    })

    it('should create customer with default properties and assert its properties', () => {
        const customer: ICustomer = new CustomerBuilder()
            .setId(customerData._id)
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

        CustomerApi.getCustomerPaged(criteria, {})
            .then(response => {
                expect(response).to.have.property('items').that.is.an('array').with.length.greaterThan(0);

                const customerResponse: any = response.items[0];

                expect(customerResponse).to.have.property('firstName', customerData.firstName);
                expect(customerResponse).to.have.property('lastName', customerData.lastName);
                expect(customerResponse).to.have.property('phone', customerData.phone);
                expect(customerResponse).to.have.property('email', customerData.email);
                expect(customerResponse).to.have.property('customerType', customerData.customerType);
                expect(customerResponse).to.have.property('state', StateEnum.active,);
                expect(customerResponse).to.have.property('_id', customerData._id,);

                expect(customerResponse.stateHistory).to.be.an('array').that.is.not.empty;
                expect(customerResponse.stateHistory[0]).to.have.property('state', StateEnum.active,);
            });
    })

    it('should create customer with maximal properties and assert its properties', () => {
        let note: string = faker.finance.account(70)

        const customer: ICustomer = new CustomerBuilder()
            .setId(customerData._id)
            .setFirstName(customerData.firstName)
            .setLastName(customerData.lastName + '-Kulej')
            .setPhone(customerData.phone)
            .setEmail(customerData.lastName + '-Kulej' + '.' + customerData.firstName + '@longmailcontentwithnumber123exaample.ue')
            .setCustomerType(customerData.customerType)
            .setState(customerData.state)
            .setCreatedAt(customerData.createdAt)
            .setUpdatedAt(customerData.updatedAt)
            .setNote(note)
            .build();

        CustomerApi.createCustomerWithBuilder(customer, {failOnStatusCode: false})

        CustomerApi.getCustomerById(customer._id)
            .then(response => {
                cy.log('get customer by its id, response:', JSON.stringify(response));

                const customerResponse: any = response

                expect(customerResponse.stateHistory).to.be.an('array').that.is.not.empty;
                expect(customerResponse.stateHistory[0]).to.have.property('state', StateEnum.active,);
                expect(customerResponse.stateHistory[0]).to.have.property('setAt').match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);

                expect(customerResponse).to.have.property('firstName', customerData.firstName);
                expect(customerResponse).to.have.property('lastName', customerData.lastName + '-Kulej');
                expect(customerResponse).to.have.property('phone', customerData.phone);
                expect(customerResponse).to.have.property('email', customerData.lastName + '-Kulej' + '.' + customerData.firstName + '@longmailcontentwithnumber123exaample.ue');
                expect(customerResponse).to.have.property('customerType', customerData.customerType);
                expect(customerResponse).to.have.property('_id', customerData._id,);
                expect(customerResponse).to.have.property('note', note);
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

    it.skip('should get bad request when no names data, TODO BUG', () => {
        const customer: ICustomer = new CustomerBuilder()
            .setFirstName(null)
            .setLastName(null)
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
});