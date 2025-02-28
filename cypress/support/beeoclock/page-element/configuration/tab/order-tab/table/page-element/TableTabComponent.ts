export class TableTabComponent {

    public getElement(): any {
        return cy.get('kanban-order')
    }

    public getConfirmedTab(): any {
        return this.getElement().find('.bg-neutral-100.w-full.max-w-xs')
            .first()
    }

    public getDoneTab(): any {
        return this.getElement().find('.bg-neutral-100.w-full.max-w-xs')
            .eq(1)
    }

    public getCanclledTab(): any {
        return this.getElement().find('.bg-neutral-100.w-full.max-w-xs')
            .last()
    }
}