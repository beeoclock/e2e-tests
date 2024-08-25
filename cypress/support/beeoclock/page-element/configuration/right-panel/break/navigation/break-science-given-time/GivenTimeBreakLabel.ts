export class GivenTimeBreakLabel {
    public getElement(): any {
        return cy.get('.flex.flex-col.gap-1')
            .find('.text-beeColor-500').first()
    }
}