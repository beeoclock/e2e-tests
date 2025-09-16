import {StripePageElement} from "./StripePageElement";

export class StripePage {
    private static inputs = StripePageElement.StripeInputComponent;

    public static assertInputElement(): StripePage {
        this.inputs.getStripeEmailInput()
            .invoke('prop', 'innerText').then((innerText: string): void => {
            expect(innerText).to.include("Email\ne2e.testing@dev.beeoclock.com")
        })
        return this;
    }

    public static assertOrderSummary(tariffName: string): StripePage {
        cy.get('[data-testid="product-summary-name"]').should('have.text', 'Subscribe to ' + tariffName)
        cy.get('.ProductSummary-amountsContainer.false')
            .invoke('prop', 'innerText').then((innerText: string): void => {
            if (tariffName === 'Basic') {
                expect(innerText.trim().replace(/\s+/g, ' '))
                    .to.contain('PLN 59.00 per month Basic plan for small teams (PL).');
            }
        })
        return this
    }

    public static typeCardValue(cardValue: string): StripePage {
        this.inputs.getCardNumberInput().type(cardValue)
        return this
    }

    public static typeCardExpiration(expiration: string): StripePage {
        this.inputs.getCardExpiration().type(expiration)
        return this
    }

    public static typeCardCVV(cvv: string): StripePage {
        this.inputs.getCardCVV().type(cvv)
        return this
    }

    public static typeCardBillingName(billingName: string): StripePage {
        this.inputs.getCardBillingName().type(billingName)
        return this
    }

    public static clickSubmitButton(): StripePage {
        StripePageElement.SubmitButton.getElement()
            .click();
        return this;
    }
}