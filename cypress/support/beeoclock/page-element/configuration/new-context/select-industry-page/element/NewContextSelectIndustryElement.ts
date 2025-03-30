export class NewContextSelectIndustryElement {

    public getTitle(): Cypress.Chainable<any> {
        return cy.get('h1').first()
        .scrollIntoView().should('be.visible')
    }

    public getLearningIndustryElement(): any {
       return cy.get('#create-business-form-business-industry-TeachingAndConsultation')
            .parent('li').first()
    }

    public getCosmeticIndustryElement(): any {
        return cy.get('#create-business-form-business-industry-BeautyIndustry')
            .parent('li').first()
    }

    public getHealthcareIndustryElement(): any {
        return cy.get('#create-business-form-business-industry-Healthcare')
            .parent('li').first()
    }

    public getOtherIndustryElement(): any {
        return cy.get('#create-business-form-business-industry-Other')
            .parent('li').first()
    }
}