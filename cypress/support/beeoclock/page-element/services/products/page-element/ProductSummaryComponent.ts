export class ProductSummaryComponent {

    public getMainElementSelector(): string {
        return 'app-product-summary-container'
    }

    public getSummaryElement(): any {
        return cy.get(this.getMainElementSelector()).find('.leading-tight.flex.gap-2')
    }
}