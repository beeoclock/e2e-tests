import {OrderCancellationPageElement} from "./OrderCancellationPageElement";

export class OrderCancellationPage {

    public verifyCancelInformation(): OrderCancellationPage {
        cy.get('.mb-4').find('div').should('contain', "Wydarzenie zostało anulowane")
        cy.get('.text-base.font-normal').should('contain', "Wydarzenie zostało pomyślnie anulowane na prośbę użytkownika")
        return this;
    }

    public verifyCancelledOrderSummaryValue(tdKey: string, expectValue: string): OrderCancellationPage {
        OrderCancellationPageElement.CancelledOrderSummaryElement.getElement(tdKey).invoke('prop', 'innerText').then(innerText => {
            expect(innerText.trim()).to.contain(expectValue.trim())
        })
        return this;
    }

    public verifyCancelledPriceValue(tdKey: string, expectValue: string): OrderCancellationPage {
        OrderCancellationPageElement.CancelledOrderSummaryElement.getElement(tdKey).contains(expectValue)
        return this;
    }

    public verifyCancelledOrderDetails(tdKey: string, expectValue: string): OrderCancellationPage {
        OrderCancellationPageElement.CancellationOrderDetailsElement.getElement(tdKey).invoke('prop', 'innerText').then(innerText => {
            expect(innerText).to.contain(expectValue)
        })
        return this;
    }

    public verifyCancelledOrderMainDetails(tdKey: string, expectedValue: string): OrderCancellationPage {
        OrderCancellationPageElement.CancelledOrderMainDetailsElement.getElement(tdKey).contains(expectedValue)
        return this;
    }

}