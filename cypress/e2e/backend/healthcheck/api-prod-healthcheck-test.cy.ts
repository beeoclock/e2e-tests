import {CustomerApi} from "../../../support/beeoclock/backend/panel/customer/CustomerApi";
import {ICustomer} from "../../../support/beeoclock/backend/panel/customer/create/ICustomer";
import {CustomerFactory} from "../../../support/beeoclock/backend/panel/customer/factory/CustomerFactory";
import {Environment} from "../../../support/beeoclock/common/Interception/ApiRequestHelper";
import {CustomerBuilder} from "../../../support/beeoclock/backend/panel/customer/create/CustomerBuilder";
import {HTTPStatusCodeType} from "../../../support/beeoclock/backend/enum/HTTPStatusCodeType";
import {ICustomerSearchCriteria} from "../../../support/beeoclock/backend/panel/customer/queries/ICustomerSearchCriteria";
import {CustomerSearchCriteriaBuilder} from "../../../support/beeoclock/backend/panel/customer/queries/CustomerSearchCriteriaBuilder";
import {BackendCommonEnum} from "../../../support/beeoclock/backend/enum/BackendCommonEnum";
import {StateEnum} from "../../../support/beeoclock/backend/panel/order/enum/StateEnum";

describe('api prod healthcheck', function () {
    let customerData: ICustomer;

    it('create customer', (): void => {
        customerData = CustomerFactory.createCustomer()
        CustomerApi.createCustomerWithBuilder(customerData, {}, Environment.prod)
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

        CustomerApi.updateCustomerWithBuilder(customer, customerData._id, {}, Environment.prod)
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

        CustomerApi.getCustomerPaged(criteria, {}, Environment.prod)
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
})