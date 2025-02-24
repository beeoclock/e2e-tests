import { AbsenceApi } from "support/beeoclock/backend/panel/absence/AbsenceApi";
import { ClientPropertiesEnum } from "support/beeoclock/common/enum/ClientPropertiesEnum";
import { ServiceEnum } from "support/beeoclock/common/enum/ServiceEnum";
import { BusinessNameEnum } from "support/beeoclock/page-element/common/enum/BusinessNameEnum";
import { PanelLoginPageElement } from "support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import { PanelLoginPage } from "support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";

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
