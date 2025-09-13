import {ServicesPages} from "../../../../support/beeoclock/page-element/services/ServicesPages";
import {productProperties} from "../../../../fixtures/service/product/productProperties";
import {ProductsPages} from "../../../../support/beeoclock/page-element/services/products/productsPages";

describe('product oder e2e', function (){
    const properties = productProperties

    beforeEach(() => {
        cy.loginOnPublicPage()
        ServicesPages.NavigationPage.clickOnProductTab()
    })

    it('should order one product correctly', function (){
        ProductsPages.ProductPage
            .clickAddGivenProduct(properties.conditioner.name)
            .verifyAmountOfSelectedProduct(properties.conditioner.name, '1')
            .clickGoToCheckoutButton()

        ProductsPages.OrderedProductPage
            .verifyAmountOfOrderedProducts(1)
            .clickExpandGivenProduct(properties.conditioner.name)
            .verifyTag(properties.conditioner.name, properties.conditioner.tag)
            .verifyTotalPrize(properties.conditioner.trimmedPrize)

        ServicesPages.BookingClientDataPage
            .typeFirstName("Mark")
            .typeEmail("mark@example.eu")
            .typePhoneNumber("555-555-123")
            .typeComment("Please for fabric describe of product")
            .checkAgreement()

    })
});