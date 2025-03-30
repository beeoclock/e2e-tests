export class NewContextIntroductionElement {

    public getTitleElement(): any {
        return cy.get('h1').first()
    }

    public getSubTitleElement(): any {
        return cy.contains('p', 'Zwiększ wydajność swojej firmy dzięki kompleksowemu rozwiązaniu')
        .scrollIntoView().should('be.visible')
    }

    public getBeginButton(): any {
        return cy.get('[href="/identity/create-business/names"]')
        .scrollIntoView().should('be.visible')
    }
}