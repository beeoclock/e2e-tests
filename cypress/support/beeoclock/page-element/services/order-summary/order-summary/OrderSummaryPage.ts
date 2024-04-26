import { OrderSummaryPageElement } from "./OrderSummaryPageElement";

export class OrderSummaryPage {

    public verifyOrderSummaryValue(tdKey: string, expectValue: string): OrderSummaryPage {
        OrderSummaryPageElement.OrderSummaryElement.getElement(tdKey).invoke('prop', 'innerText').then(innerText => {
            expect(innerText.trim()).to.contain(expectValue.trim())
        })
        return this; 
    }
}