export class StripeInputComponent {

    public getStripeEmailInput(): any {
        return cy.get('.ReadOnlyFormField-email.ReadOnlyFormField')
            .scrollIntoView().should('be.visible')
    }

    public getCardNumberInput(): any {
        return cy.get('#cardNumber')
            .scrollIntoView().should('be.visible')
    }

    public getCardExpiration(): any {
        return cy.get('#cardExpiry')
            .scrollIntoView().should('be.visible')
    }

    public getCardCVV(): any {
        return cy.get('#cardCvc')
            .scrollIntoView().should('be.visible')
    }

    public getCardBillingName(): any {
        return cy.get('#billingName')
            .scrollIntoView().should('be.visible')
    }
}