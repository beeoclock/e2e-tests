import {DateUtils} from "../../Utils/DateUtils";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";
import {CommonElementPage} from "../../../page-element/common/common-element/CommonElementPage";
import {TabNameEnum} from "../../../page-element/configuration/left-menu/enum/TabNameEnum";

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
        });
    }

    public static deleteOrderWithGivenId(id: string): any {
        return cy.get<string>('@token').then(tokenId => {
            return cy.request({
                method: 'DELETE',
                url: BackendCommonEnum.ENTRY_POINT + 'order/' + id,
                headers: {
                    'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
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
        return cy.get<string>('@token').then(tokenId => {
            const url = BackendCommonEnum.ENTRY_POINT + 'order/' + orderId;
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
        });
    }

    public static deleteAllCurrentOrders(): void {
        OrderApi.getOrderId().then(orderIds => {
            OrderApi.deleteOrders(orderIds);
        }).then(() => {
            CommonElementPage.reloadOnCalendar()
        })
    }

    public static deleteAllCurrentOrdersWithAssertion(): void {
        OrderApi.getOrderId().then(orderIds => {
            OrderApi.deleteOrdersWithAssert(orderIds);
        });
    }
}