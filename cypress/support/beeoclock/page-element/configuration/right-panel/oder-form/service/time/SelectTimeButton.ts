export class SelectTimeButton {
    public getElement(): any {
        return cy.get('app-duration-chip-component')
            .find('button').first()
            .scrollIntoView().should('be.visible')
    }
}//document.querySelector("#ion-overlay-4 > div > ion-datetime").shadowRoot.querySelector("div.datetime-time > ion-picker > ion-picker-column:nth-child(1) > ion-picker-column-option:nth-child(3)").scrollIntoView({block: 'center'})