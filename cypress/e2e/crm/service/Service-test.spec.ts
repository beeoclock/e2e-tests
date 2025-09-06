import {TestCaseEnum} from "../../../fixtures/enum/TestCaseEnum";
import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {CommonElementPage} from "../../../support/beeoclock/page-element/common/common-element/CommonElementPage";

describe('client-app test', (): void => {

    it('form summary component test', function (): void {
        const testCases = [
            TestCaseEnum.CASE_1,
            TestCaseEnum.CASE_2,
            TestCaseEnum.CASE_3,
            TestCaseEnum.CASE_4,
        ];

        cy.loginOnPanel()

        cy.log('get to given module')
        LeftMenuPage.clickServiceTab();

        CommonElementPage.clickAddResourceButton();
    });
});