import {ICustomerSearchCriteria} from "../../../support/beeoclock/backend/panel/customer/queries/ICustomerSearchCriteria";
import {CustomerSearchCriteriaBuilder} from "../../../support/beeoclock/backend/panel/customer/queries/CustomerSearchCriteriaBuilder";
import {BackendCommonEnum} from "../../../support/beeoclock/backend/enum/BackendCommonEnum";
import {CustomerApi} from "../../../support/beeoclock/backend/panel/customer/CustomerApi";

describe('get all customer api test', (): void => {

    it('get all customer api test', (): void => {
        const criteria: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
            .withTenantId(BackendCommonEnum.X_Business_Tenant_Id)
            .withOrderBy('name')
            .withOrderDir('asc')
            .withPageSize(900)
            .build();

        CustomerApi.getCustomerPaged(criteria, {}).then(response => {
            cy.log('resp', JSON.stringify(response))
        })
    })
})