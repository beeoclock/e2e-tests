import {ServicesPages} from "../../../../support/beeoclock/page-element/services/ServicesPages";
import {productProperties} from "../../../../fixtures/service/product/productProperties";

describe('product oder e2e', function (){
    const properties = productProperties

    beforeEach(() => {
        cy.loginOnPublicPage()
        ServicesPages.NavigationPage.clickOnProductTab()
    })

    it('should order one product correctly', function (){
        ServicesPages.ProductPage
            .clickAddGivenProduct(properties.shampoo.name)
            .verifyAmountOfSelectedProduct(properties.shampoo.name, '1')
    })
});