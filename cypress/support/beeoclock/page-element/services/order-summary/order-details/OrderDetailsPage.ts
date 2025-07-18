import {OrderDetailsPageElement} from "./OrderDetailsPageElement";

export class OrderDetailsPage {

    public verifyOrderDetails(tdKey: string, expectValue: string): OrderDetailsPage {
        OrderDetailsPageElement.OrderDetailsElement.getElement(tdKey).invoke('prop', 'innerText').then((innerText: string): void => {
            expect(innerText).to.contain(expectValue)
        })
        return this;
    }

    public verifyDetailsHeader(): OrderDetailsPage {
        cy.get('.text-3xl.font-bold').should('have.prop', 'outerText').and('include', 'Rezerwacja potwierdzona')
        cy.get('.text-sm.font-regular.leading-tight.tracking-tight.flex')
            .should('have.prop', 'outerText').and('include', 'Gratulacje! Specjalista potwierdził rezerwację. Dodaj ją do swojego kalendarza, aby być na bieżąco.')
        return this;
    }

    public verifyOrderMainDetails(tdKey: string, expectedValue: string): OrderDetailsPage {
        OrderDetailsPageElement.OrderMainDetailsElement.getElement(tdKey).contains(expectedValue)
        return this;
    }
}