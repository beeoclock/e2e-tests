export class BizLandingElement {

    public getElement(): any {
        return cy.get('#faq')
    }

    public getFaqList(): any {
        return cy.get('#faq-list')
    }

    public getFaqItem(index: number): any {
        return cy.get(`#faq-item-${index}`)
    }
}