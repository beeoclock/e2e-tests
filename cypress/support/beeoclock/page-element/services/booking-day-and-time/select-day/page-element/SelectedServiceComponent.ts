export class SelectedServiceComponent {

    public getElement(): any {
        return cy.get('.flex.justify-between.mb-8')
    }

    public getSelectedServiceName(): any {
        return this.getElement().find('h3.font-bold.text-sm.text-right')
    }

    public getSelectedServiceTime(): any {
        return this.getElement().find('p.text-sm.text-right')
    }
}