export class GivenTimeBreakLabel {
    public getElement(): any {
        return cy.get('app-additional-menu').find('.flex.flex-col.gap-1')
            .find('.bg-white.flex.gap-2.justify-between.rounded-xl.w-full')
            .scrollIntoView().should('be.visible')
    }

    public getSpecialist(): any {
        return cy.get('.p-2 > .flex-col.gap-2 > .bg-white > :nth-child(1)')
    }

    public getSelectedTime(): any {
        return cy.get('.p-2 > .flex-col.gap-2 > .bg-white > :nth-child(2)')
    }
}