import {LeftMenuPage} from "../../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {CommonElementPage} from "../../../../support/beeoclock/page-element/common/common-element/CommonElementPage";

describe("product creation test", () => {

    it('create product', function () {

        cy.loginOnPanel()
        LeftMenuPage.clickProductTab()

        CommonElementPage.clickAddResourceButton()


    })
})