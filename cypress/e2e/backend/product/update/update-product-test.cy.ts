import {ProductApi} from "../../../../support/beeoclock/backend/product/ProductApi";
import {StateEnum} from "../../../../support/beeoclock/backend/enum/StateEnum";

describe.skip('UpdateProduct', () => {

    it('Should update product state to active', () => {
        const qs = {
            state: StateEnum.inactive,
            tags: ['Pielęgnacja']
        };

        ProductApi.getProducts(qs).then((resp) => {
            expect(resp.items.length).to.be.greaterThan(0);

            const productId = resp.items[0]._id;
            cy.log('Product ID: ' + productId);

            const body = {
                state: StateEnum.active,
                languageVersions: resp.languageVersions,
                _id: productId
            }
            ProductApi.updateProduct(productId, body).then((updateResp) => {
                cy.log('Updated: ' + JSON.stringify(updateResp));
            });
        });
    });
})