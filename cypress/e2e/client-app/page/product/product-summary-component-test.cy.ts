import {ServiceEnum} from "../../../../support/ServiceEnum";
import {NavigationPage} from "../../../../support/beeoclock/page-element/services/navigation/NavigationPage";
import {ServicesPages} from "../../../../support/beeoclock/page-element/services/ServicesPages";
import {productProperties} from "../../../../fixtures/service/product/productProperties";
import {ProductsPages} from "../../../../support/beeoclock/page-element/services/products/productsPages";

describe('product summary component test', function () {
    const properties = productProperties

    beforeEach(() => {
        cy.loginOnPublicPage()
        ServicesPages.NavigationPage.clickOnProductTab()
    })

    it('snapshot assertions', function () {
        ServicesPages.ProductPage
            .verifyConditionerSnapShot()
            .verifyHairMaskSnapShot()
    })

    it('test product summary component - looped', function () {
        testCasesAddition.forEach(({tc, count, expectedQty, expectedPrice}) => {
            addGivenProduct(properties.conditioner.name, count.toString())
            addGivenProduct(properties.hairMask.name, count.toString())
            addGivenProduct(properties.shampoo.name, count.toString())
            ServicesPages.ProductPage.verifySummary(expectedQty, expectedPrice)
        })

        testCasesSubtraction.forEach(({tc, count, expectedQty, expectedPrice}) => {
            subtractGivenProduct(properties.conditioner.name, count.toString())
            subtractGivenProduct(properties.hairMask.name, count.toString())
            subtractGivenProduct(properties.shampoo.name, count.toString())
            ServicesPages.ProductPage.verifySummary(expectedQty, expectedPrice)
        })

        subtractGivenProduct(properties.conditioner.name, '0')
        ServicesPages.ProductPage.verifySummary('2', '90,00 zł')

        subtractGivenProduct(properties.shampoo.name, '0')
        ServicesPages.ProductPage.verifySummary('1', '50,00 zł')

    })

    function addGivenProduct(product: string, amount: string): void {
        ProductsPages.ProductPage
            .clickAddGivenProduct(product)
            .verifyAmountOfSelectedProduct(product, amount)
    }

    function subtractGivenProduct(product: string, amount: string): void {
        ProductsPages.ProductPage
            .clickSubtractGivenProduct(product)
            .verifyAmountOfSelectedProduct(product, amount)
    }

    const testCasesAddition = [
        {tc: "TC - 1", count: 1, expectedQty: '3', expectedPrice: '290,00 zł'},
        {tc: "TC - 2", count: 2, expectedQty: '6', expectedPrice: '580,00 zł'},
        {tc: "TC - 3", count: 3, expectedQty: '9', expectedPrice: '870,00 zł'},
        {tc: "TC - 4", count: 4, expectedQty: '12', expectedPrice: '1 160,00 zł'},
        {tc: "TC - 5", count: 5, expectedQty: '15', expectedPrice: '1 450,00 zł'},
        {tc: "TC - 6", count: 6, expectedQty: '18', expectedPrice: '1 740,00 zł'},
        {tc: "TC - 7", count: 7, expectedQty: '21', expectedPrice: '2 030,00 zł'},
        {tc: "TC - 8", count: 8, expectedQty: '24', expectedPrice: '2 320,00 zł'}
    ]

    const testCasesSubtraction = [
        {tc: "TC - 1", count: 7, expectedQty: '21', expectedPrice: '2 030,00 zł'},
        {tc: "TC - 2", count: 6, expectedQty: '18', expectedPrice: '1 740,00 zł'},
        {tc: "TC - 3", count: 5, expectedQty: '15', expectedPrice: '1 450,00 zł'},
        {tc: "TC - 4", count: 4, expectedQty: '12', expectedPrice: '1 160,00 zł'},
        {tc: "TC - 5", count: 3, expectedQty: '9', expectedPrice: '870,00 zł'},
        {tc: "TC - 6", count: 2, expectedQty: '6', expectedPrice: '580,00 zł'},
        {tc: "TC - 7", count: 1, expectedQty: '3', expectedPrice: '290,00 zł'},
    ]
})
