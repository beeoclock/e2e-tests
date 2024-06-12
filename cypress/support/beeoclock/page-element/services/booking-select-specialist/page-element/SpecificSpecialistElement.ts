export class SpecificSpecialistElement {
    public getElement(specialist: string): any {
        return cy.get('select-specialist-circle')
            .find('.items-start')
            .find('.text-center')
            .contains(specialist)
            .scrollIntoView()
    }
}