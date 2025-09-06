import {CustomerApi} from "../../../../support/beeoclock/backend/panel/customer/CustomerApi";
import {CustomerFactory} from "../../../../support/beeoclock/backend/panel/customer/factory/CustomerFactory";
import {ICustomer} from "../../../../support/beeoclock/backend/panel/customer/create/ICustomer";
import {CustomerBuilder} from "../../../../support/beeoclock/backend/panel/customer/create/CustomerBuilder";
import {ICustomerSearchCriteria} from "../../../../support/beeoclock/backend/panel/customer/queries/ICustomerSearchCriteria";
import {CustomerSearchCriteriaBuilder} from "../../../../support/beeoclock/backend/panel/customer/queries/CustomerSearchCriteriaBuilder";
import {BackendCommonEnum} from "../../../../support/beeoclock/backend/enum/BackendCommonEnum";
import {HTTPStatusCodeType} from "../../../../support/beeoclock/backend/enum/HTTPStatusCodeType";
import {NumericUtils} from "../../../../support/beeoclock/backend/Utils/NumericUtils";
import {StateEnum} from "support/beeoclock/backend/panel/order/enum/StateEnum";
import {StateHistoryBuilder} from "../../../../support/beeoclock/backend/panel/state/builder/StateHistoryBuilder";
import {IStateHistory} from "../../../../support/beeoclock/backend/panel/state/interface/IStateHistory";

describe('customer update api test', (): void => {
    let customerData: ICustomer;

    beforeEach('create customer to edit', (): void => {
        customerData = CustomerFactory.createCustomer()
        CustomerApi.createCustomerWithBuilder(customerData, {})
    })

    afterEach('delete customer after each test', (): void => {
        CustomerApi.deleteCustomer(customerData._id, {})
    })

    it('update customer names', (): void => {
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
                expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
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
                expect(response).to.have.property('items').that.is.an('array').with.length.greaterThan(0);

                const customerResponse: any = response.items[0];

                expect(customerResponse).to.have.property('firstName', 'Tom');
                expect(customerResponse).to.have.property('lastName', 'Yates');
                expect(customerResponse).to.have.property('phone', customerData.phone);
                expect(customerResponse).to.have.property('email', customerData.email);
                expect(customerResponse).to.have.property('customerType', customerData.customerType);
                expect(customerResponse).to.have.property('state', StateEnum.active,);
                expect(customerResponse).to.have.property('_id', customerData._id,);

                expect(customerResponse.stateHistory).to.be.an('array').that.is.not.empty;
                expect(customerResponse.stateHistory[0]).to.have.property('state', StateEnum.active,);
            });
    })

    it('update customer mail', (): void => {
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
                expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
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
                expect(response).to.have.property('items').that.is.an('array').with.length.greaterThan(0);

                const customerResponse: any = response.items[0];

                expect(customerResponse).to.have.property('firstName', customerData.firstName);
                expect(customerResponse).to.have.property('lastName', customerData.lastName);
                expect(customerResponse).to.have.property('phone', customerData.phone);
                expect(customerResponse).to.have.property('email', customerData.firstName + '@example.com');
                expect(customerResponse).to.have.property('customerType', customerData.customerType);
                expect(customerResponse).to.have.property('state', StateEnum.active,);
                expect(customerResponse).to.have.property('_id', customerData._id,);

                expect(customerResponse.stateHistory).to.be.an('array').that.is.not.empty;
                expect(customerResponse.stateHistory[0]).to.have.property('state', StateEnum.active,);
            });
    })

    it('update customer phone', (): void => {
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
                expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
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
                const customerResponse: any = response.items[0];

                expect(customerResponse).to.have.property('firstName', customerData.firstName);
                expect(customerResponse).to.have.property('lastName', customerData.lastName);
                expect(customerResponse).to.have.property('phone', '48' + number);
                expect(customerResponse).to.have.property('email', customerData.email);
                expect(customerResponse).to.have.property('customerType', customerData.customerType);
                expect(customerResponse).to.have.property('state', StateEnum.active,);
                expect(customerResponse).to.have.property('_id', customerData._id,);

                expect(customerResponse.stateHistory).to.be.an('array').that.is.not.empty;
                expect(customerResponse.stateHistory[0]).to.have.property('state', StateEnum.active,);
            });
    })

    it('should try update customer on incorrect email', (): void => {
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

    it.skip('should try update customer on incorrect phone TODO BUG', (): void => {
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

    it('should update customer phone prefix', (): void => {
        let number: string = NumericUtils.generateRandomValueWithoutZeroPrefix(9)

        const customer: ICustomer = new CustomerBuilder()
            .setId(customerData._id)
            .setFirstName(customerData.firstName)
            .setLastName(customerData.lastName)
            .setPhone('380' + number)
            .setEmail(customerData.email)
            .setCustomerType(customerData.customerType)
            .setState(customerData.state)
            .setCreatedAt(customerData.createdAt)
            .setUpdatedAt(customerData.updatedAt)
            .setNote(customerData.note)
            .build();

        CustomerApi.updateCustomerWithBuilder(customer, customerData._id, {failOnStatusCode: false})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
            })

        const criteria: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
            .withTenantId(BackendCommonEnum.X_Business_Tenant_Id)
            .withOrderBy('name')
            .withOrderDir('asc')
            .withPage(1)
            .withPageSize(10)
            .withPhrase('380' + number)
            .build();

        CustomerApi.getCustomerPaged(criteria, {})
            .then(response => {
                const customerResponse: any = response.items[0];

                expect(customerResponse).to.have.property('firstName', customerData.firstName);
                expect(customerResponse).to.have.property('lastName', customerData.lastName);
                expect(customerResponse).to.have.property('phone', '380' + number);
                expect(customerResponse).to.have.property('email', customerData.email);
                expect(customerResponse).to.have.property('customerType', customerData.customerType);
                expect(customerResponse).to.have.property('state', StateEnum.active,);
                expect(customerResponse).to.have.property('_id', customerData._id,);

                expect(customerResponse.stateHistory).to.be.an('array').that.is.not.empty;
                expect(customerResponse.stateHistory[0]).to.have.property('state', StateEnum.active,);
            });
    })

    it('should set customer as inactive, then assert it whole state history', (): void => {
        let number: string = NumericUtils.generateRandomValueWithoutZeroPrefix(9)

        const now = new Date();
        const activeStateTime = now.toISOString();
        const inactiveStateTime = new Date(now.getTime() + 5000).toISOString();

        const activeStateHistory: IStateHistory = new StateHistoryBuilder()
            .setState(StateEnum.active)
            .setSetAt(activeStateTime)
            .build();

        const inactiveStateHistory: IStateHistory = new StateHistoryBuilder()
            .setState(StateEnum.inactive)
            .setSetAt(inactiveStateTime)
            .build();

        const customer: ICustomer = new CustomerBuilder()
            .setId(customerData._id)
            .setFirstName(customerData.firstName)
            .setLastName(customerData.lastName)
            .setPhone('48' + number)
            .setEmail(customerData.email)
            .setCustomerType(customerData.customerType)
            .setState(StateEnum.inactive)
            .setCreatedAt(customerData.createdAt)
            .setStateHistory([activeStateHistory, inactiveStateHistory])
            .setUpdatedAt(inactiveStateTime)
            .setNote(customerData.note)
            .build();

        CustomerApi.updateCustomerWithBuilder(customer, customerData._id, {failOnStatusCode: false})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
            });

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
                const customerResponse: any = response.items[0];

                expect(customerResponse).to.have.property('firstName', customerData.firstName);
                expect(customerResponse).to.have.property('lastName', customerData.lastName);
                expect(customerResponse).to.have.property('phone', '48' + number);
                expect(customerResponse).to.have.property('email', customerData.email);
                expect(customerResponse).to.have.property('customerType', customerData.customerType);
                expect(customerResponse).to.have.property('state', StateEnum.inactive);
                expect(customerResponse).to.have.property('_id', customerData._id);

                expect(customerResponse.stateHistory).to.be.an('array').that.is.not.empty;
                expect(customerResponse.stateHistory[0]).to.have.property('state', StateEnum.active);
                expect(customerResponse.stateHistory[0]).to.have.property('setAt', activeStateTime);
                expect(customerResponse.stateHistory[1]).to.have.property('state', StateEnum.inactive);
                expect(customerResponse.stateHistory[1]).to.have.property('setAt', inactiveStateTime);
            });
    });

    it('should set customer as deleted, then assert it whole state history', (): void => {
        let number: string = NumericUtils.generateRandomValueWithoutZeroPrefix(9)

        const now = new Date();
        const activeStateTime: string = now.toISOString();
        const deletedStateTime: string = new Date(now.getTime() + 5000).toISOString();

        const activeStateHistory: IStateHistory = new StateHistoryBuilder()
            .setState(StateEnum.active)
            .setSetAt(activeStateTime)
            .build();

        const deletedStateHistory: IStateHistory = new StateHistoryBuilder()
            .setState(StateEnum.deleted)
            .setSetAt(deletedStateTime)
            .build();

        const customer: ICustomer = new CustomerBuilder()
            .setId(customerData._id)
            .setFirstName(customerData.firstName)
            .setLastName(customerData.lastName)
            .setPhone('48' + number)
            .setEmail(customerData.email)
            .setCustomerType(customerData.customerType)
            .setState(StateEnum.deleted)
            .setCreatedAt(customerData.createdAt)
            .setStateHistory([activeStateHistory, deletedStateHistory])
            .setUpdatedAt(deletedStateTime)
            .setNote(customerData.note)
            .build();

        CustomerApi.updateCustomerWithBuilder(customer, customerData._id, {failOnStatusCode: false})
            .then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.OK_200);

                const updatedCustomer = response.body;

                expect(updatedCustomer).to.have.property('firstName', customerData.firstName);
                expect(updatedCustomer).to.have.property('lastName', customerData.lastName);
                expect(updatedCustomer).to.have.property('phone', '48' + number);
                expect(updatedCustomer).to.have.property('email', customerData.email);
                expect(updatedCustomer).to.have.property('customerType', customerData.customerType);
                expect(updatedCustomer).to.have.property('state', StateEnum.deleted);
                expect(updatedCustomer).to.have.property('_id', customerData._id);

                expect(updatedCustomer.stateHistory).to.be.an('array').that.is.not.empty;
                expect(updatedCustomer.stateHistory[0]).to.have.property('state', StateEnum.active);
                expect(updatedCustomer.stateHistory[0]).to.have.property('setAt', activeStateTime);
                expect(updatedCustomer.stateHistory[1]).to.have.property('state', StateEnum.deleted);
                expect(updatedCustomer.stateHistory[1]).to.have.property('setAt', deletedStateTime);
            });

        const criteria: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
            .withTenantId(BackendCommonEnum.X_Business_Tenant_Id)
            .withOrderBy('name')
            .withOrderDir('asc')
            .withPage(1)
            .withPageSize(10)
            .withPhrase('48' + number)
            .build();

        CustomerApi.getCustomerPaged(criteria, {})
            .then((response: any): void => {
                const customerResponse: any = response.items[0];

                expect(customerResponse).to.have.property('firstName', customerData.firstName);
                expect(customerResponse).to.have.property('lastName', customerData.lastName);
                expect(customerResponse).to.have.property('phone', '48' + number);
                expect(customerResponse).to.have.property('email', customerData.email);
                expect(customerResponse).to.have.property('customerType', customerData.customerType);
                expect(customerResponse).to.have.property('state', StateEnum.deleted);
                expect(customerResponse).to.have.property('_id', customerData._id);

                expect(customerResponse.stateHistory).to.be.an('array').that.is.not.empty;
                expect(customerResponse.stateHistory[0]).to.have.property('state', StateEnum.active);
                expect(customerResponse.stateHistory[0]).to.have.property('setAt', activeStateTime);
                expect(customerResponse.stateHistory[1]).to.have.property('state', StateEnum.deleted);
                expect(customerResponse.stateHistory[1]).to.have.property('setAt', deletedStateTime);
            });
    });
})