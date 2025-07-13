import {AbsenceColumnRowEnum} from "./enum/AbsenceColumnRowEnum";
import {TableElementComponent} from "./page-element/TableElementComponent";

export class AbsenceTableVerifier {
    protected TableElementComponent: TableElementComponent = new TableElementComponent();

    public verifyGivenRow(keyValue: string, row: AbsenceColumnRowEnum, expectedValue: string): AbsenceTableVerifier {
        this.TableElementComponent.getGivenRow(keyValue, row)
            .should('have.prop', 'textContent').and('include', expectedValue)
        return this;
    }

    public verifyCreatedAtRow(keyValue: string): AbsenceTableVerifier {
        this.TableElementComponent.getGivenRow(keyValue, AbsenceColumnRowEnum.CREATED_AT)
            .invoke('prop', 'textContent')
            .then((actualText): void => {
                const cleanedText = actualText.replace(/\u00a0/g, '').trim();
                const match = cleanedText.match(/^(\d{1,2})\.(\d{2})\.(\d{4}), (\d{2}):(\d{2})$/);

                expect(match, `Date format is incorrect: ${cleanedText}`).to.not.be.null;

                const [, day, month, year, hours, minutes] = match!.map(Number);
                const actualDate = new Date(year, month - 1, day, hours, minutes);

                const currentDate = new Date();
                const diffInMinutes = Math.abs((currentDate.getTime() - actualDate.getTime()) / 60000);

                expect(diffInMinutes).to.be.at.most(3);
            });

        return this;
    }

    public verifyGivenRowNotExist(keyValue: string): AbsenceTableVerifier {
        //TEMP
        cy.get('app-list-absence-page').contains(keyValue).should('not.exist')
        return this;
    }

    public verifyTableIsEmpty(): AbsenceTableVerifier {
        cy.get('not-found-table-data-component').should('be.visible')
        return this;
    }
}