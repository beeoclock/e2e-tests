import {DateUtils} from "../../Utils/DateUtils";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";

export class OrderApi {

    public static getOrderId(): any {
        return cy.get<string>('@token').then(tokenId => {
            const start = DateUtils.getStartOfTodayUTC();
            const end = DateUtils.getEndOfTodayUTC();
            const url = `https://api.dev.beeoclock.com/panel/api/v1/order/paged?start=${start}&end=${end}&page=1&pageSize=10&orderBy=updatedAt&orderDir=desc`;
            return cy.request({
                method: 'GET',
                url: url,
                headers: {
                    'X-Business-Tenant-Id': '662a4637a4b376d20c065b1d'
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
        });
    }

    public static deleteOrderWithGivenId(id: string): any {
        return cy.get<string>('@token').then(tokenId => {
            return cy.request({
                method: 'DELETE',
                url: BackendCommonEnum.ENTRY_POINT + 'service/' + id,
                headers: {
                    'X-Business-Tenant-Id': '662a4637a4b376d20c065b1d'
                },
                auth: {
                    bearer: tokenId
                }
            }).then(response => {
                expect(response.status).to.equal(200);
            })
        });
    }

    public static deleteOrders(orderIds: string[]): any {
        if (orderIds.length === 0) {
            cy.log('No orders to delete');
            return;
        }

        orderIds.forEach(orderId => {
            OrderApi.deleteOrderWithGivenId(orderId);
        });
    }

    public static deleteAllCurrentOrders(): void {
        OrderApi.getOrderId().then(orderIds => {
            OrderApi.deleteOrders(orderIds);
        });
    }
}