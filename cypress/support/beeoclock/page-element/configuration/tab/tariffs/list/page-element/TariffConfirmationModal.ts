export class TariffConfirmationModal {

    private getElement(): any {
        return cy.get('app-confirm-change-tariff-plan-component')
            .scrollIntoView().should('be.visible')
    }

    public getHeader(): any {
        return this.getElement().find('h1')
    }

    public getCurrentPlan(): any {
        return this.getElement().contains('span', 'Aktualny plan:')
            .next('span')
    }

    public getNewPlan(): any {
        return this.getElement().contains('span', 'Nowy plan:')
            .next('span')
    }

    public getUsedDayPlan(): any {
        return this.getElement().contains('span', 'Wykorzystane dni:')
            .next('span')
    }
}