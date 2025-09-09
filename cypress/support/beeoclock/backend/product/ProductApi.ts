import {ApiRequestHelper, Environment} from "../../common/Interception/ApiRequestHelper";
import {HttpMethodEnum} from "../../common/enum/HttpMethodEnum";

export class ProductApi extends ApiRequestHelper {

    public static getProducts(qs: any): Cypress.Chainable {
        return this.handleApiQueryRequest(Environment.dev, '/product/paged', qs)
    }

    public static updateProduct(id: string, body?: any): Cypress.Chainable {
        return this.handleApiRequest(Environment.dev, HttpMethodEnum.PUT, `/product/${id}`, body)
    }
}