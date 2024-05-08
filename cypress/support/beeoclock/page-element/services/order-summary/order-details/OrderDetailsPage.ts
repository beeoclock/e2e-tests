import { OrderDetailsPageElement } from "./OrderDetailsPageElement";

export class OrderDetailsPage {

    public verifyOrderDetails(tdKey: string, expectValue: string): OrderDetailsPage {
        OrderDetailsPageElement.OrderDetailsElement.getElement(tdKey).invoke('prop', 'innerText').then(innerText => {
            expect(innerText).to.contain(expectValue)
        })
        return this;
    }

    public verifyDetailsHeader(): OrderDetailsPage {
        cy.get('.py-4 > :nth-child(5)').find('th').should('have.prop', 'outerText').and('include', 'Zamówione usługi')
        return this;
    }

    public verifyOrderMainDetails(tdKey: string, expectedValue: string): OrderDetailsPage {
        OrderDetailsPageElement.OrderMainDetailsElement.getElement(tdKey).contains(expectedValue)
        return this;
    }
}