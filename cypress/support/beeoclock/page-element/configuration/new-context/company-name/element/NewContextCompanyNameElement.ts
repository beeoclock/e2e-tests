export class NewContextCompanyNameElement {

    public getTitle(): any {
        return cy.get('h1').first()
    }

    public getCompanyNameInput(): any {
        return cy.get('#create-business-form-input-businessName')
            .find('input')
    }
}