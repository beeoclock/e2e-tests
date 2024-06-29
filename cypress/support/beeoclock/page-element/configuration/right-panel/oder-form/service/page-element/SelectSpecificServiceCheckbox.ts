export class SelectSpecificServiceCheckbox {
    public getElement(service: string): any {
        return cy.get('bee-card').contains(service)
            .parents('bee-card').find('.bi.bi-circle')
    }
}