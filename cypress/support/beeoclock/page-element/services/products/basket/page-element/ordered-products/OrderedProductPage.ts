import {BasketOrderedDataElement} from "./element/BasketOrderedDataElement";
import {Assertions} from "../../../../../configuration/tab/common/assertions/Assertions";

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

    public clickRollUpGivenProduct(name: string): OrderedProductPage {
        this.element.getRollUpArrow(name).click()
        return this;
    }

    public verifyTag(name: string, tagName: string): OrderedProductPage {
        const element = this.element.getTag(name)
        Assertions.assertProperties(element, 'innerText', tagName)
        return this
    }

    public verifyTotalPrize(prize: string): OrderedProductPage {
        const element = this.element.getTotalPrizeElement()
        Assertions.assertTrimmedProperties(element, 'innerText', `Całkowita kwota\n${prize}`)
        return this
    }

    public clickPayNowButton(): OrderedProductPage {
        const btn = cy.contains('button','Zapłać teraz').scrollIntoView()
        btn.should('not.be.disabled').click()
        return this
    }
}