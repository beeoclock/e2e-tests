import {DateUtils} from "../../Utils/DateUtils";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";
import {EntryPointEnum} from "../../../common/Interception/EntryPointEnum";
import {AuthApi} from "../../auth/AuthApi";
import {OrderStatusEnum} from "./enum/OrderStatusEnum";
import {StateEnum} from "./enum/StateEnum";
import {OrderServiceStatusEnum} from "./enum/OrderServiceStatusEnum";

export class OrderApi {

    private static getToken(): Cypress.Chainable<string> {
        return AuthApi.getToken();
    }

    public static getOrderIds(): any {
        this.getToken()
        const tokenId = Cypress.env('token');
        const start = DateUtils.getStartOfPreviousDays(5);
        const end = DateUtils.getEndOfTomorrowUTC();
        const url = EntryPointEnum.API_ENTRY_POINT + `/order/paged?start=${start}&end=${end}&page=1&pageSize=100&orderBy=updatedScience&orderDir=desc&statuses=done&statuses=accepted&statuses=requested`;
        return cy.request({
            method: 'GET',
            url: url,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
            },
            qs: {
                state: StateEnum.active,
                statuses: [OrderStatusEnum.done, OrderStatusEnum.confirmed],
            },
            auth: {
                bearer: tokenId
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            cy.log('not filtered items: ' + JSON.stringify(response.body.totalSize));

            const filteredItems = response.body.items.filter(({services}) => {
                return services.some(({state, status}) => {
                    return state === StateEnum.active && [OrderServiceStatusEnum.done, OrderServiceStatusEnum.accepted].includes(status);
                })
            });
            cy.log('filtered items: ', JSON.stringify(filteredItems));
            if (Array.isArray(filteredItems)) {
                const orderIds = filteredItems.map((order: any) => order._id);
                cy.log('Order IDs:', orderIds.join(', '));
                return cy.wrap(orderIds);
            } else {
                cy.log('No orders found');
                return cy.wrap([]);
            }
        });
    }

    public static getAllOrderIds(): any {
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

    public static getOrderWithGivenId(id: string): any {
        // return cy.get<string>('@token').then(tokenId => {
        const tokenId = Cypress.env('token');
        return cy.request({
            method: 'GET',
            url: EntryPointEnum.API_ENTRY_POINT + '/order/' + id,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
            },
            auth: {
                bearer: tokenId
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            return response.body;
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

            const stateHistory = response.body.stateHistory;
            cy.log("Order Status: " + orderStatus);
            expect(orderStatus).to.equal('deleted');

            const latestState = stateHistory[stateHistory.length - 1];
            expect(latestState.state).to.equal('deleted');
            cy.log("Latest state history entry: " + JSON.stringify(latestState));

            const services = response.body.services;
            services.forEach((service: any, index: number) => {
                cy.log(`Checking service ${index + 1} with ID: ${service._id}`);
                expect(service.state).to.equal('deleted');

                const serviceStateHistory = service.stateHistory;
                expect(serviceStateHistory.length).to.be.greaterThan(0);

                const latestServiceState = serviceStateHistory[serviceStateHistory.length - 1];
                expect(latestServiceState.state).to.equal('deleted');
                cy.log("Latest service state history entry: " + JSON.stringify(latestServiceState));
            });
        });
    }

    public static deleteAllCurrentOrders(): void {
        OrderApi.getOrderIds().then(orderIds => {
            if (orderIds.length !== 0) {
                OrderApi.deleteOrders(orderIds);
            }
        })
    }

    public static deleteAllOrders(): void {
        OrderApi.getAllOrderIds().then(orderIds => {
            if (orderIds.length !== 0) {
                OrderApi.deleteOrders(orderIds);
            }
        })
    }

    public static deleteAllCurrentOrdersWithAssertion(): void {
        OrderApi.getOrderIds().then(orderIds => {
            OrderApi.deleteOrdersWithAssert(orderIds);
        });
    }
}