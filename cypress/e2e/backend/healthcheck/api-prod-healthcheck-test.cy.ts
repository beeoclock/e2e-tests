import {CustomerApi} from "../../../support/beeoclock/backend/panel/customer/CustomerApi";
import {ICustomer} from "../../../support/beeoclock/backend/panel/customer/create/ICustomer";
import {CustomerFactory} from "../../../support/beeoclock/backend/panel/customer/factory/CustomerFactory";
import {ICustomerSearchCriteria} from "../../../support/beeoclock/backend/panel/customer/queries/ICustomerSearchCriteria";
import {CustomerSearchCriteriaBuilder} from "../../../support/beeoclock/backend/panel/customer/queries/CustomerSearchCriteriaBuilder";
import {Environment} from "../../../support/beeoclock/common/Interception/ApiRequestHelper";

describe.skip('api prod healthcheck', function () {
    let customerData: ICustomer;

    beforeEach('create customer to edit', (): void => {
        customerData = CustomerFactory.createCustomer()
        CustomerApi.createCustomerWithBuilder(customerData, {})
    })

    it('get paged customer with given pageSize and assert', (): void => {
        let pageSize: string[];
        pageSize = ['1', '2', '15', '20', '30', '33', '78', '94'];

        pageSize.forEach(size => {
            const criteria: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
                .withTenantId(Environment.prod)
                .withOrderBy('name')
                .withOrderDir('asc')
                .withPage(1)
                .withPageSize(Number(size))
                .build();

            CustomerApi.getCustomerPaged(criteria, {}, Environment.prod)
                .then(response => {
                    expect(response.items).to.have.lengthOf(Number(size))
                })
        })
    });
})