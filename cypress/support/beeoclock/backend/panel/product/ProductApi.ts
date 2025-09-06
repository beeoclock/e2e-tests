import {DevEntryPointEnum} from "../../../common/Interception/DevEntryPointEnum";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";
import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";
import {EnvEnum} from "../../../common/enum/EnvEnum";
import {ApiRequestHelper} from "../../../common/Interception/ApiRequestHelper";
import {HttpMethodEnum} from "../../../common/enum/HttpMethodEnum";

export class ProductApi extends ApiRequestHelper {

    public static createProductTag(tag: any): any {
        return this.handleApiRequest(HttpMethodEnum.POST, '/product-tag', tag)
    }

    public static deleteProductTag(id: string): any {
        return this.handleApiRequest(HttpMethodEnum.DELETE, `/product-tag/${id}`)
    }

    public static getProductTag(): any {
        return cy.request({
            method: 'GET',
            url: DevEntryPointEnum.API_ENTRY_POINT +
                '/product-tag/paged?orderBy=name&orderDir=asc&page=1&pageSize=20&updatedSince=2022-02-02T00%3A00%3A00Z&active=1',
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id,
                'x-github-action': EnvEnum.X_GITHUB_ACTION
            },
            auth: {
                bearer: Cypress.env('token')
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            if (Array.isArray(response.body.items) && response.body.items.length > 0) {
                const orderIds = response.body.items.map((order: any) => order._id);
                cy.log('tags ids:', orderIds.join(', '));
                return cy.wrap(orderIds);
            } else {
                cy.log('No tags found');
                return cy.wrap([]);
            }
        });
    }

    public static deleteAllTags(): void {
        this.getProductTag().then(tags => {
            if (tags.length === 0) {
                cy.log("No tags to delete");
                return;
            }
            cy.wrap(null).then((): void => {
                return tags.reduce((prev, tagId): void => {
                    return prev.then(() => this.deleteProductTag(tagId));
                }, Cypress.Promise.resolve());
            });
        });
    }
}