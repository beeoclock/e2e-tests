import {AbsenceApi} from "support/beeoclock/backend/panel/absence/AbsenceApi";

describe("delete all absences by API", (): void => {

    before('clear environment', () => {
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.clearAllCookies();
    });

    it('delete absence', function () {
        cy.log('delete all current absences');
        AbsenceApi.deleteAllAbsences();
    });
});
