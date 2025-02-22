import {CustomerApi} from "../../../../support/beeoclock/backend/panel/customer/CustomerApi";
import {CustomerFactory} from "../../../../support/beeoclock/backend/panel/customer/factory/CustomerFactory";
import {ICustomer} from "../../../../support/beeoclock/backend/panel/customer/create/ICustomer";
import {CustomerBuilder} from "../../../../support/beeoclock/backend/panel/customer/create/CustomerBuilder";
import {ICustomerSearchCriteria} from "../../../../support/beeoclock/backend/panel/customer/queries/ICustomerSearchCriteria";
import {CustomerSearchCriteriaBuilder} from "../../../../support/beeoclock/backend/panel/customer/queries/CustomerSearchCriteriaBuilder";
import {BackendCommonEnum} from "../../../../support/beeoclock/backend/enum/BackendCommonEnum";
import {StateEnum} from "../../../../support/beeoclock/backend/state-history/StateEnum";
import {HTTPStatusCodeType} from "../../../../support/beeoclock/backend/enum/HTTPStatusCodeType";
import {NumericUtils} from "../../../../support/beeoclock/backend/Utils/NumericUtils";

describe('customer update api test', () => {
    let customerData: ICustomer;

    beforeEach('create customer to edit', () => {
        customerData = CustomerFactory.createCustomer()
        CustomerApi.createCustomerWithBuilder(customerData, {})
    })

    afterEach('delete customer after each test', () => {
        CustomerApi.deleteCustomer(customerData._id, {})
    })

    it('update customer names', () => {
        const customer: ICustomer = new CustomerBuilder()
            .setId(customerData._id)
            .setFirstName('Tom')
            .setLastName('Yates')
            .setPhone(customerData.phone)
            .setEmail(customerData.email)
            .setCustomerType(customerData.customerType)
            .setState(customerData.state)
            .setCreatedAt(customerData.createdAt)
            .setUpdatedAt(customerData.updatedAt)
            .setNote(customerData.note)
            .build();

        CustomerApi.updateCustomerWithBuilder(customer, customerData._id, {})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.OK);
            })

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
                cy.log('Response:', JSON.stringify(response));
                expect(response).to.have.property('items').that.is.an('array').with.length.greaterThan(0);

                const customerResponse: any = response.items[0];

                expect(customerResponse).to.have.property('firstName', 'Tom');
                expect(customerResponse).to.have.property('lastName', 'Yates');
                expect(customerResponse).to.have.property('phone', customerData.phone);
                expect(customerResponse).to.have.property('email', customerData.email);
                expect(customerResponse).to.have.property('customerType', customerData.customerType);
                expect(customerResponse).to.have.property('state', StateEnum.ACTIVE,);
                expect(customerResponse).to.have.property('_id', customerData._id,);

                expect(customerResponse.stateHistory).to.be.an('array').that.is.not.empty;
                expect(customerResponse.stateHistory[0]).to.have.property('state', StateEnum.ACTIVE,);
            });
    })

    it('update customer mail', () => {
        const customer: ICustomer = new CustomerBuilder()
            .setId(customerData._id)
            .setFirstName(customerData.firstName)
            .setLastName(customerData.lastName)
            .setPhone(customerData.phone)
            .setEmail(customerData.firstName + '@example.com')
            .setCustomerType(customerData.customerType)
            .setState(customerData.state)
            .setCreatedAt(customerData.createdAt)
            .setUpdatedAt(customerData.updatedAt)
            .setNote(customerData.note)
            .build();

        CustomerApi.updateCustomerWithBuilder(customer, customerData._id, {})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.OK);
            })

        const criteria: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
            .withTenantId(BackendCommonEnum.X_Business_Tenant_Id)
            .withOrderBy('name')
            .withOrderDir('asc')
            .withPage(1)
            .withPageSize(10)
            .withPhrase(customerData.firstName + '@example.com')
            .build();

        CustomerApi.getCustomerPaged(criteria, {})
            .then(response => {
                cy.log('Response:', JSON.stringify(response));
                expect(response).to.have.property('items').that.is.an('array').with.length.greaterThan(0);

                const customerResponse: any = response.items[0];

                expect(customerResponse).to.have.property('firstName', customerData.firstName);
                expect(customerResponse).to.have.property('lastName', customerData.lastName);
                expect(customerResponse).to.have.property('phone', customerData.phone);
                expect(customerResponse).to.have.property('email', customerData.firstName + '@example.com');
                expect(customerResponse).to.have.property('customerType', customerData.customerType);
                expect(customerResponse).to.have.property('state', StateEnum.ACTIVE,);
                expect(customerResponse).to.have.property('_id', customerData._id,);

                expect(customerResponse.stateHistory).to.be.an('array').that.is.not.empty;
                expect(customerResponse.stateHistory[0]).to.have.property('state', StateEnum.ACTIVE,);
            });
    })

    it('update customer phone', () => {
        let number: string = NumericUtils.generateRandomValueWithoutZeroPrefix(9)
        const customer: ICustomer = new CustomerBuilder()
            .setId(customerData._id)
            .setFirstName(customerData.firstName)
            .setLastName(customerData.lastName)
            .setPhone('48' + number)
            .setEmail(customerData.email)
            .setCustomerType(customerData.customerType)
            .setState(customerData.state)
            .setCreatedAt(customerData.createdAt)
            .setUpdatedAt(customerData.updatedAt)
            .setNote(customerData.note)
            .build();

        CustomerApi.updateCustomerWithBuilder(customer, customerData._id, {})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.OK);
            })

        const criteria: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
            .withTenantId(BackendCommonEnum.X_Business_Tenant_Id)
            .withOrderBy('name')
            .withOrderDir('asc')
            .withPage(1)
            .withPageSize(10)
            .withPhrase('48' + number)
            .build();

        CustomerApi.getCustomerPaged(criteria, {})
            .then(response => {
                cy.log('Response:', JSON.stringify(response));
                const customerResponse: any = response.items[0];

                expect(customerResponse).to.have.property('firstName', customerData.firstName);
                expect(customerResponse).to.have.property('lastName', customerData.lastName);
                expect(customerResponse).to.have.property('phone', '48' + number);
                expect(customerResponse).to.have.property('email', customerData.email);
                expect(customerResponse).to.have.property('customerType', customerData.customerType);
                expect(customerResponse).to.have.property('state', StateEnum.ACTIVE,);
                expect(customerResponse).to.have.property('_id', customerData._id,);

                expect(customerResponse.stateHistory).to.be.an('array').that.is.not.empty;
                expect(customerResponse.stateHistory[0]).to.have.property('state', StateEnum.ACTIVE,);
            });
    })

    it('should try update customer on incorrect email', () => {
        const customer: ICustomer = new CustomerBuilder()
            .setId(customerData._id)
            .setFirstName(customerData.firstName)
            .setLastName(customerData.lastName)
            .setPhone(customerData.phone)
            .setEmail(customerData.firstName + '.com')
            .setCustomerType(customerData.customerType)
            .setState(customerData.state)
            .setCreatedAt(customerData.createdAt)
            .setUpdatedAt(customerData.updatedAt)
            .setNote(customerData.note)
            .build();

        CustomerApi.updateCustomerWithBuilder(customer, customerData._id, {failOnStatusCode: false})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.BadRequest);
            })

        const criteria: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
            .withTenantId(BackendCommonEnum.X_Business_Tenant_Id)
            .withOrderBy('name')
            .withOrderDir('asc')
            .withPage(1)
            .withPageSize(10)
            .withPhrase(customerData.firstName + '.com')
            .build();

        CustomerApi.getCustomerPaged(criteria, {})
            .then(response => {
                expect(response).to.have.property('items').that.is.an('array').with.length(0);
            });
    })

    it('should try update customer on incorrect phone TODO BUG', () => {
        let number: string = NumericUtils.generateRandomValueWithoutZeroPrefix(3)

        const customer: ICustomer = new CustomerBuilder()
            .setId(customerData._id)
            .setFirstName(customerData.firstName)
            .setLastName(customerData.lastName)
            .setPhone('48' + number)
            .setEmail(customerData.email)
            .setCustomerType(customerData.customerType)
            .setState(customerData.state)
            .setCreatedAt(customerData.createdAt)
            .setUpdatedAt(customerData.updatedAt)
            .setNote(customerData.note)
            .build();

        CustomerApi.updateCustomerWithBuilder(customer, customerData._id, {failOnStatusCode: false})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.BadRequest);
            })

        const criteria: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
            .withTenantId(BackendCommonEnum.X_Business_Tenant_Id)
            .withOrderBy('name')
            .withOrderDir('asc')
            .withPage(1)
            .withPageSize(10)
            .withPhrase('48' + number)
            .build();

        CustomerApi.getCustomerPaged(criteria, {})
            .then(response => {
                expect(response).to.have.property('items').that.is.an('array').with.length(0);
            });
    })
})