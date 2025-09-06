import {CustomerApi} from "../../../support/beeoclock/backend/panel/customer/CustomerApi";
import {ICustomer} from "../../../support/beeoclock/backend/panel/customer/create/ICustomer";
import {CustomerFactory} from "../../../support/beeoclock/backend/panel/customer/factory/CustomerFactory";
import {Environment} from "../../../support/beeoclock/common/Interception/ApiRequestHelper";

describe('api prod healthcheck', function () {
    let customerData: ICustomer;

    it('create customer to edit', (): void => {
        customerData = CustomerFactory.createCustomer()
        CustomerApi.createCustomerWithBuilder(customerData, {}, Environment.prod)
    })
})