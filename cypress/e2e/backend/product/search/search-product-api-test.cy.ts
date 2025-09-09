import { StateEnum } from "support/beeoclock/backend/enum/StateEnum"
import { ProductApi } from "support/beeoclock/backend/product/ProductApi"

describe('search products', () => {

    it('Should return an list of products', () => {
        const qs = {
            state: StateEnum.inactive,
            tags: ['Pielęgnacja']
        }

        ProductApi.getProducts(qs).then(response => {
            cy.log('resp: ' + JSON.stringify(response))
        })
    })
})