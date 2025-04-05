export class NewContextElement {

    public getBackButton(): any {
        return cy.get('utility-back-link-component')
            .find('.bi.bi-arrow-left')
    }
}