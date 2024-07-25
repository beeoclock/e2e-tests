export class OrderApi {

    public static getOrderId(tenetId: string): Cypress.Chainable<JQuery<HTMLElement>> {
       return cy.get('@tokenId').then(tokenId => {
            return cy.request({
                method: 'GET',
                url: Cypress.env('apiBackendEntryPoint') + '/api/users',
                qs: {
                    'X-Business-Tenant-Id': tenetId,
                    orderBy: 'updatedAt',
                    orderDir: 'desc',
                    page: 1,
                    pageSize: 10
                },
                auth: {
                    'bearer': tokenId
                }
            });
        }).then(response => {
            expect(response.status).to.equal(200);
            // const orderIds = resp.body.map((order: any) => order._id);
            // return cy.wrap(orderIds);
           if (Array.isArray(response.body.items) && response.body.items.length > 0) {
               const orderId = response.body.items[0].id;
               return orderId;
           }
        });
    }
}