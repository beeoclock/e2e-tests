export class SummaryPriceValue {
    public getElement(): any {
        return cy.contains('div', 'Całkowita kwota')
            .next('.font-bold')
    }
}