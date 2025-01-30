import {DateUtils} from "../../../backend/Utils/DateUtils";
import {EntryPointEnum} from "../EntryPointEnum";

export class ProductsApiRequestHelper {

    public static getProducts(): string {
        const getProducts = 'getProducts' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/product/paged?*').as(getProducts);
        return getProducts
    }
}