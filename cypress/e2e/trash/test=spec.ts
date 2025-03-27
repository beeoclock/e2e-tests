import {ProductApi} from "../../support/beeoclock/backend/panel/product/ProductApi";
import {NumericUtils} from "../../support/beeoclock/backend/Utils/NumericUtils";
import {ProductTagBuilder} from "../../support/beeoclock/backend/panel/product/tag/ProductTagBuilder";
import {faker} from "@faker-js/faker";
import {AuthApi} from "../../support/beeoclock/backend/auth/AuthApi";
import {ClientPropertiesEnum} from "../../support/beeoclock/common/enum/ClientPropertiesEnum";

describe('test', () => {
let token: any;

    before('get token', () => {
        AuthApi.getToken().then(bearer => {
            token = bearer
        })
    })

    it ('should return the correct header', () => {
        let id: string = NumericUtils.generateObjectId()
        cy.log('X-GITHUB-ACTION', ClientPropertiesEnum.X_GITHUB_ACTION)

        const tag = new ProductTagBuilder().setId(id).setName('TAG NO ' + faker.finance.pin(6)).build();
        // ProductApi.requestTestHeader(tag, token)
        ProductApi.createProductTag(tag, token).then(() => {
            ProductApi.deleteProductTag(id, token).then(() => {
                cy.log('product tag deleted');
            })
        })    })
})