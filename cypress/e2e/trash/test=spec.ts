import {ProductApi} from "../../support/beeoclock/backend/panel/product/ProductApi";
import {NumericUtils} from "../../support/beeoclock/backend/Utils/NumericUtils";
import {ProductTagBuilder} from "../../support/beeoclock/backend/panel/product/tag/ProductTagBuilder";
import {faker} from "@faker-js/faker";

describe('test', (): void => {

    it('should return the correct header', (): void => {
        let id: string = NumericUtils.generateObjectId()
        const tag = new ProductTagBuilder().setId(id).setName('TAG NO ' + faker.finance.pin(6)).build();
        ProductApi.createProductTag(tag).then((): void => {
            ProductApi.deleteProductTag(id).then((): void => {
                cy.log('product tag deleted');
            })
        })
    })
})