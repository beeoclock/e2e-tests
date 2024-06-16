    export class SaveButton {
        public getElement(): any {
            return cy.contains('button', 'Zapisać się')
                .should('be.visible')
                .scrollIntoView()
        }
    }