import {GivenProductComponent} from "./page-element/GivenProductComponent";
import {ProductSummaryComponent} from "./page-element/ProductSummaryComponent";
import {Assertions} from "../../configuration/tab/common/assertions/Assertions";
import {ProductSelectorStore} from "./store/ProductSelectorStore";
import {AssertionsHelper} from "../../../common/assertion/AssertionsHelper";
import {productProperties} from "../../../../../fixtures/service/product/productProperties";
import {CommonButton} from "../../common/button/CommonButton";

export class ProductPage {
    private productComponent: GivenProductComponent = new GivenProductComponent()
    private productSummaryComponent: ProductSummaryComponent = new ProductSummaryComponent()
    private store: ProductSelectorStore = new ProductSelectorStore()

    public clickAddGivenProduct(productName: string): ProductPage {
        this.productComponent.getPlusButtonForGivenProduct(productName)
            .click()
        return this;
    }

    public clickSubtractGivenProduct(productName: string): ProductPage {
        this.productComponent.getMinusButtonForGivenProduct(productName)
            .click()
        return this;
    }

    public verifyAmountOfSelectedProduct(productName: string, amount: string): ProductPage {

        if (amount === '0') {
            this.productComponent
                .getMinusButtonForGivenProduct(productName)
                .should('not.exist');
            return this;
        }

        Assertions.assertProperties(
            this.productComponent.getAmountOfSelectedProduct(productName),
            "innerText",
            amount
        );
        return this;
    }

    public verifyProductProperties(): ProductPage {

        return this
    }

    public verifySummary(totalAmount: string, prize: string): ProductPage {
        const element = this.productSummaryComponent.getSummaryElement()
        const expect = `${totalAmount} ${prize}`
        Assertions.assertTrimmedProperties(element, "textContent", expect)
        return this;
    }

    public verifyConditionerSnapShot(): ProductPage {
        const element = this.productComponent.getGivenProductElement(productProperties.conditioner.name)
        AssertionsHelper.assertOuterHtmlSnapshot(element, this.store.getConditionerOuterHtml())
        return this;
    }

    public verifyHairMaskSnapShot(): ProductPage {
        const element = this.productComponent.getGivenProductElement(productProperties.hairMask.name)
        AssertionsHelper.assertOuterHtmlSnapshot(element, this.store.getHairMaskOuterHtml())
        return this;
    }

    public clickGoToCheckoutButton(): ProductPage {
        CommonButton.clickOnButtonByPhrase('Przejdź do kasy')
        return this
    }
}