import {DateUtils} from "../../Utils/DateUtils";
import {ApiRequestHelper, Environment} from "../../../common/Interception/ApiRequestHelper";

export class OrderApi extends ApiRequestHelper {

    public static getOrderIds(env?: Environment): any {
        let environment: Environment = env ?? Environment.dev

        const tokenId: string = Cypress.env('token');
        const start: string = DateUtils.getStartOfPreviousDays(5);
        const end: string = DateUtils.getEndOfGivenDayUTC(3);

            const url: string = this.getApiEntryPoint(environment) + '/order/paged'
                + `?start=${start}&end=${end}`
                + `&page=1&pageSize=100`
                + `&orderBy=updatedScience&orderDir=desc`;

            return cy.request({
                method: 'GET',
                url,
                headers: {
                    'X-Business-Tenant-Id': this.getTenantId(environment),
                },
                auth: {bearer: tokenId}
            }).then(({status, body}): any => {
                expect(status).to.equal(200);
                const {items} = body;

                const activeCurrent = items.filter(
                    ({state, status}) =>
                        state === 'active' && (status === 'requested' || status === 'confirmed')
                );

                cy.log(`Active & current orders found: ${activeCurrent.length}`);

            const orderIds = activeCurrent.map(({_id}) => _id);
            cy.log(`Order IDs: ${orderIds.join(', ')}`);

            return cy.wrap(orderIds);
        });
    }

    public static getAllOrderIds(env?: Environment): any {
        let environment: Environment = env ?? Environment.dev
        this.getToken()
        const tokenId = Cypress.env('token');
        const url: string = this.getApiEntryPoint(environment) + '/order/paged?orderBy=createdAt&orderDir=desc&page=1&pageSize=2000';
        return cy.request({
            method: 'GET',
            url: url,
            headers: {
                'X-Business-Tenant-Id': this.getTenantId(environment),
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
    }

    public static deleteOrderWithGivenId(id: string, env?: Environment): any {
        let environment: Environment = env ?? Environment.dev

        this.getToken()
        const tokenId = Cypress.env('token');
        return cy.request({
            method: 'DELETE',
            url: this.getApiEntryPoint(environment) + '/order/' + id,
            headers: {
                'X-Business-Tenant-Id': this.getTenantId(environment),
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            },
            auth: {
                bearer: tokenId
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            return response
        })
    }

    public static getOrderWithGivenId(id: string, env?: Environment): any {
        let environment: Environment = env ?? Environment.dev
        const tokenId = Cypress.env('token');
        return cy.request({
            method: 'GET',
            url: this.getApiEntryPoint(environment) + '/order/' + id,
            headers: {
                'X-Business-Tenant-Id': this.getTenantId(environment),
            },
            auth: {
                bearer: tokenId
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            return response.body;
        })
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

    public static assertSuccessfulDeletion(orderId: string, env?: Environment): any {
        let environment: Environment = env ?? Environment.dev
        const tokenId = Cypress.env('token');
        const url = this.getApiEntryPoint(environment) + '/order/' + orderId;
        return cy.request({
            method: 'GET',
            url: url,
            headers: {
                'X-Business-Tenant-Id': this.getTenantId(environment),
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
            services.forEach((service: any, index: number): void => {
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