import {ElementHelper} from "../../../../common/assertion/ElementHelper";

export class TabElement {
    public getElement(tabName: string): any {
        return cy.get('utility-sidebar-menu-component')
            .find('li').contains(tabName)
            .scrollIntoView().should('be.visible')
    }
}