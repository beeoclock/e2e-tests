import {BasketOrderedDataElement} from "./element/BasketOrderedDataElement";
import {Assertions} from "../../../../../configuration/tab/common/assertions/Assertions";
import {CommonPropertiesEnum} from "../../../../../common/enum/CommonPropertiesEnum";

export class OrderedProductPage {
    private element: BasketOrderedDataElement = new BasketOrderedDataElement()

    public verifyAmountOfOrderedProducts(length: number): OrderedProductPage {
        this.element.getDetailsElement().should('have.length', length)
        return this;
    }

    public clickExpandGivenProduct(name: string): OrderedProductPage {
        this.element.getExpandArrow(name).click()
        return this;
    }

    public verifyTag(name: string, tagName: string): OrderedProductPage {
        this.element.getTag(name).should('have.text', tagName)
        return this
    }

    public verifyTotalPrize(prize: string): OrderedProductPage {
        const element = this.element.getTotalPrizeElement()
        Assertions.assertProperties(element, 'textContent', `Całkowita kwota ${prize} zł`)
        return this
    }
}