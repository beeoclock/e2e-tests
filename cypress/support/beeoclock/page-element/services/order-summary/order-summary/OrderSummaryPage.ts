import {OrderSummaryPageElement} from "./OrderSummaryPageElement";

export class OrderSummaryPage {

    public verifyOrderSummaryValue(tdKey: string, expectValue: string): OrderSummaryPage {
        OrderSummaryPageElement.OrderSummaryElement.getElement(tdKey).invoke('prop', 'innerText').then((innerText: string): void => {
            expect(innerText.trim()).to.contain(expectValue.trim())
        })
        return this;
    }

    public verifyPriceValue(tdKey: string, expectValue: string): OrderSummaryPage {
        OrderSummaryPageElement.OrderSummaryElement.getElement(tdKey).contains(expectValue)
        return this;
    }
}