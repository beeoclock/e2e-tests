import {ElementHelper} from "../../../../../../common/assertion/ElementHelper";

export class SaveButton {
    public getElement(): any {
        const element = cy.get('utility-button-save-container-component')
            .find('button').contains( 'Zapisz');
        ElementHelper.scrollToAndVerifyVisibility(element);
        return element;
    }
}