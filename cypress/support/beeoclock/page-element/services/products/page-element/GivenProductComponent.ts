export class GivenProductComponent {

    public getMainSelector(): string {
        return 'select-product-multiple'
    }

    public getGivenProductElement(product: string): any {
        return cy.get(this.getMainSelector()).contains(product)
            .parents(this.getMainSelector()).first();
    }

    public getPlusButtonForGivenProduct(product: string): any {
        return this.getGivenProductElement(product)
            .find('.bi-plus-lg')
    }

    public getMinusButtonForGivenProduct(product: string): any {
        return this.getGivenProductElement(product)
            .find('.bi-dash-lg')
    }

    public getAmountOfSelectedProduct(product: string): any {
        return this.getGivenProductElement(product)
            .find('.text-base.text-black')
    }
}