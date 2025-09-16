import {ProductApi} from "../../../support/beeoclock/backend/panel/product/ProductApi";
import {ProductTagBuilder} from "../../../support/beeoclock/backend/panel/product/tag/ProductTagBuilder";
import {NumericUtils} from "../../../support/beeoclock/backend/Utils/NumericUtils";
import {faker} from "@faker-js/faker";
import {IProductTags} from "../../../support/beeoclock/backend/panel/product/tag/IProductTags";
import {Environment} from "../../../support/beeoclock/common/Interception/ApiRequestHelper";

describe.skip("crm api healthcheck", (): void => {

    //await on environment
    it.only('create product tag and delete', function (): void {
        let id: string = NumericUtils.generateObjectId()
        const tag: IProductTags = new ProductTagBuilder().setId(id).setName('TAG NO ' + faker.finance.pin(6)).build();
        ProductApi.createProductTag(Environment.pre_prod, tag).then((): void => {
            ProductApi.deleteProductTag(Environment.pre_prod, id).then((): void => {
                cy.log('product tag deleted');
            })
        })
    });
});
