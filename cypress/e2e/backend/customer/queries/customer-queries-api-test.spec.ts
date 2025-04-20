import {ICustomer} from "../../../../support/beeoclock/backend/panel/customer/create/ICustomer";
import {CustomerFactory} from "../../../../support/beeoclock/backend/panel/customer/factory/CustomerFactory";
import {CustomerApi} from "../../../../support/beeoclock/backend/panel/customer/CustomerApi";
import {ICustomerSearchCriteria} from "../../../../support/beeoclock/backend/panel/customer/queries/ICustomerSearchCriteria";
import {CustomerSearchCriteriaBuilder} from "../../../../support/beeoclock/backend/panel/customer/queries/CustomerSearchCriteriaBuilder";
import {BackendCommonEnum} from "../../../../support/beeoclock/backend/enum/BackendCommonEnum";
import {CustomerStateEnum} from "../../../../support/beeoclock/backend/panel/customer/enum/CustomerStateEnum";
/*
endpoints:
- GET /customer/paged
- GET /customer/{customerId}
 */
describe('customer queries api test', () => {
    let customerData: ICustomer;

    beforeEach('create customer to edit', () => {
        customerData = CustomerFactory.createCustomer()
        CustomerApi.createCustomerWithBuilder(customerData, {})
    })

    it('get paged customer with given pageSize and assert', () => {
        let pageSize: string[];
        pageSize = ['1', '2', '15', '20', '30', '33', '78', '94'];

        pageSize.forEach(size => {
            const criteria: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
                .withTenantId(BackendCommonEnum.X_Business_Tenant_Id)
                .withOrderBy('name')
                .withOrderDir('asc')
                .withPage(1)
                .withPageSize(Number(size))
                .build();

            CustomerApi.getCustomerPaged(criteria, {})
                .then(response => {
                    cy.log('total:', response.totalSize)
                    expect(response.items).to.have.lengthOf(Number(size))
                })
        })
    });

    it('get paged customer with given page and assert', () => {
        let pageSize: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        let allEmails = new Set<string>();
        let allPhoneNumbers = new Set<string>();

        pageSize.forEach(size => {
            cy.log('size:', size);
            const criteria: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
                .withTenantId(BackendCommonEnum.X_Business_Tenant_Id)
                .withOrderBy('name')
                .withOrderDir('asc')
                .withPage(Number(size))
                .withPageSize(20)
                .build();

            CustomerApi.getCustomerPaged(criteria, {}).then(response => {
                expect(response.items).to.have.lengthOf(20);

                cy.log('page:', JSON.stringify(response.items));
                response.items.forEach(item => {
                    let normalizedEmail = item.email?.trim();

                    cy.wrap(null).then((): void => {

                        if (normalizedEmail) {
                            const alreadyExists: boolean = allEmails.has(normalizedEmail);
                            if (alreadyExists) {
                                cy.log(`🔁 Duplicate email found: ${normalizedEmail}`);
                            } else {
                                cy.log(`✅ Unique email: ${normalizedEmail}`);
                            }

                            expect(alreadyExists).to.be.false;
                            allEmails.add(normalizedEmail);
                        }
                    })
                    
                    // duplicate phone number assertion
                    let normalizedPhone = item.phoneNumber?.trim();
                    if (normalizedPhone) {
                        expect(allPhoneNumbers.has(normalizedPhone)).to.be.false;
                        allPhoneNumbers.add(normalizedPhone);
                    }
                });
            });
        });
    });


    it('get paged customer with given state and assert', () => {
        Object.values(CustomerStateEnum).forEach(state => {
            cy.log('state:', state);
            const criteria: ICustomerSearchCriteria = new CustomerSearchCriteriaBuilder()
                .withTenantId(BackendCommonEnum.X_Business_Tenant_Id)
                .withOrderBy('name')
                .withOrderDir('asc')
                .withPage(1)
                .withState(state)
                .build();

            CustomerApi.getCustomerPaged(criteria, {})
                .then(response => {

                    if (response.items.length > 0) {
                        response.items.forEach(item => {
                            expect(item.state).to.equal(state);
                        });
                    }
                });
        });
    });
});