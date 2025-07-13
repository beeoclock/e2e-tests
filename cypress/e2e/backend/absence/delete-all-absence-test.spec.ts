import {AbsenceApi} from "support/beeoclock/backend/panel/absence/AbsenceApi";

describe("delete all absences by API", (): void => {

    it('delete absence', function (): void {
        cy.log('delete all current absences');
        AbsenceApi.deleteAllAbsences();
    });
});
