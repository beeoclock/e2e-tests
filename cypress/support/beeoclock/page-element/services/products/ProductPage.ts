import {GivenProductComponent} from "./page-element/GivenProductComponent";
import {ProductSummaryComponent} from "./page-element/ProductSummaryComponent";
import {Assertions} from "../../configuration/tab/common/assertions/Assertions";
import {ProductSelectorStore} from "./store/ProductSelectorStore";
import {AssertionsHelper} from "../../../common/assertion/AssertionsHelper";

export class ProductPage {
    private productComponent: GivenProductComponent = new GivenProductComponent()
    private productSummaryComponent: ProductSummaryComponent = new ProductSummaryComponent()
    private store: ProductSelectorStore = new ProductSelectorStore()

    public clickAddGivenProduct(productName: string): ProductPage {
        this.productComponent.getPlusButtonForGivenProduct(productName)
            .click()
        return this;
    }

    public verifyAmountOfSelectedProduct(productName: string, amount: string): ProductPage {
        const element = this.productComponent.getAmountOfSelectedProduct(productName)
        Assertions.assertProperties(element, "innerText", amount)
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
        const element = this.productComponent.getGivenProductElement('Odżywka')
        AssertionsHelper.assertOuterHtmlSnapshot(element, this.store.getConditionerOuterHtml())
        return this;
    }
}