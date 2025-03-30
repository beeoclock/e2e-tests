export class ElementHelper {

    public static scrollToAndVerifyVisibility(element: any): any {
        return element.scrollIntoView().should('be.visible');
    }

    public static getElement(selector: string): any {
        const element = selector
        this.scrollToAndVerifyVisibility(selector)
        return selector
    }

    public static getElementById(id: string): any {
        return cy.get('#' + id)
    }
}