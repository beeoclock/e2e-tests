export class ReloadCommonButton {
    public static getElement(): any {
        return cy.get('utility-auto-refresh-component')
            .find('.bi.bi-arrow-clockwise')
    }
}