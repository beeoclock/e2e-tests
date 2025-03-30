export class IndustryDetailsCommonElement {

    public getElementBySelector(selector: string): any {
        return cy.get(selector)
            .parent('li').first()
    }
}