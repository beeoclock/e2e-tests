import {DateUtils} from "../../Utils/DateUtils";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";
import {EntryPointEnum} from "../../../common/Interception/EntryPointEnum";
import {AuthApi} from "../../auth/AuthApi";

export class OrderApi {

    private static getToken(): Cypress.Chainable<string> {
        return AuthApi.getToken();
    }

    public static getOrderIds(): any {
        this.getToken()
        // return cy.get<string>('@token').then(tokenId => {
        const tokenId = Cypress.env('token');
        const start = DateUtils.getStartOfPreviousDays(100);
        const end = DateUtils.getEndOfTomorrowUTC();
        const statusesUrl = 'statuses=done&statuses=draft&statuses=inProgress&statuses=confirmed&statuses=requested';
        const url = EntryPointEnum.API_ENTRY_POINT + `/order/paged?start=${start}&end=${end}&page=1&pageSize=100&orderBy=updatedAt&orderDir=desc&${statusesUrl}`;
        return cy.request({
            method: 'GET',
            url: url,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
            },
            qs: {
                // TODO nice to ask why it is not working, demand use statusesUrl instead -_-
                // state: "active",
                // statuses: ["done", "draft", "inProgress", "confirmed", "requested"],
                // //statuses=done&statuses=draft&statuses=inProgress&statuses=confirmed&statuses=requested
            },
            auth: {
                bearer: tokenId
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            if (Array.isArray(response.body.items) && response.body.items.length > 0) {
                const orderIds = response.body.items.map((order: any) => order._id);
                cy.log('Order IDs:', orderIds.join(', '));
                return cy.wrap(orderIds);
            } else {
                cy.log('No orders found');
                return cy.wrap([]);
            }
        });
        // });
    }

    public static getAllOrderIds(): any {
        // return cy.get<string>('@token').then(tokenId => {
        this.getToken()
        const tokenId = Cypress.env('token');
        const start = DateUtils.getStartOfPreviousDays(100);
        const end = DateUtils.getEndOfTomorrowUTC();
        const url = EntryPointEnum.API_ENTRY_POINT + '/order/paged?orderBy=createdAt&orderDir=desc&page=1&pageSize=2000';
        return cy.request({
            method: 'GET',
            url: url,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
            },
            auth: {
                bearer: tokenId
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            if (Array.isArray(response.body.items) && response.body.items.length > 0) {
                const orderIds = response.body.items.map((order: any) => order._id);
                cy.log('Order IDs:', orderIds.join(', '));
                return cy.wrap(orderIds);
            } else {
                cy.log('No orders found');
                return cy.wrap([]);
            }
        });
        // });
    }

    public static deleteOrderWithGivenId(id: string): any {
        // return cy.get<string>('@token').then(tokenId => {
        const tokenId = Cypress.env('token');
        return cy.request({
            method: 'DELETE',
            url: EntryPointEnum.API_ENTRY_POINT + '/order/' + id,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
            },
            auth: {
                bearer: tokenId
            }
        }).then(response => {
            expect(response.status).to.equal(200);
        })
        // });
    }

    public static deleteOrders(orderIds: string[]): any {
        if (0 === orderIds.length) {
            cy.log('No orders to delete');
            return;
        }

        orderIds.forEach(orderId => {
            OrderApi.deleteOrderWithGivenId(orderId);
        });
    }

    public static deleteOrdersWithAssert(orderIds: string[]): any {
        if (orderIds.length === 0) {
            cy.log('No orders to delete');
            return;
        }

        orderIds.forEach(orderId => {
            this.deleteOrderWithGivenId(orderId);
            this.assertSuccessfulDeletion(orderId)
        });
    }

    public static assertSuccessfulDeletion(orderId: string): any {
        // return cy.get<string>('@token').then(tokenId => {
        const tokenId = Cypress.env('token');
        const url = EntryPointEnum.API_ENTRY_POINT + '/order/' + orderId;
        return cy.request({
            method: 'GET',
            url: url,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
            },
            auth: {
                bearer: tokenId
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            const orderStatus = response.body.status;
            cy.log("Order Status: " + orderStatus);
            expect(orderStatus).to.equal('deleted');
        });
        // });
    }

    public static deleteAllCurrentOrders(): void {
        OrderApi.getOrderIds().then(orderIds => {
            if (orderIds.length !== 0) {
                OrderApi.deleteOrders(orderIds);
                cy.reload()
            }
        })
    }

    public static deleteAllOrders(): void {
        OrderApi.getAllOrderIds().then(orderIds => {
            if (orderIds.length !== 0) {
                OrderApi.deleteOrders(orderIds);
                cy.reload()
            }
        })
    }

    public static deleteAllCurrentOrdersWithAssertion(): void {
        OrderApi.getOrderIds().then(orderIds => {
            OrderApi.deleteOrdersWithAssert(orderIds);
        });
    }
}