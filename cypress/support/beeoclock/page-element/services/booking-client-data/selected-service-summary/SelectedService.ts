export class SelectedService {
    public getElement(service: string): any {
        return cy.get('summary').contains(service)
            .parents('summary')// <-- returns main component of given service
    }

    public getSelectedServiceName(service: string): any {
        return this.getElement(service)
            .find('.text-sm').first()
    }

    public getSelectedServiceTime(service: string): any {
        return this.getElement(service)
            .find('.inline-flex.items-center').first()
    }

    public getSelectedServicePrice(service: string): any {
        return this.getElement(service)
            .find('.inline-flex.items-center').eq(1)// as next next
    }
}