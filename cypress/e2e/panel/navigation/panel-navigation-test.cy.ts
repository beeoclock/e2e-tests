import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "../../../support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";

describe('panel navigation test', () => {

    beforeEach('setup', () => {
        cy.loginOnPanel()
    })

    it('panel navigation test', function () {
        LeftMenuPage.clickServiceTab()
        LeftMenuPage.clickMembersTab()
        LeftMenuPage.clickClientTab()
        LeftMenuPage.clickPaymentsTab()
        LeftMenuPage.clickOnGivenTab(TabNameEnum.ABSENCE)
        LeftMenuPage.clickOnGivenTab(TabNameEnum.TARIFFS)
        LeftMenuPage.clickOnGivenTab(TabNameEnum.VISITS)
        LeftMenuPage.clickOnBusinessProfile()
        LeftMenuPage.clickOnStatisticsTab()
        LeftMenuPage.clickOnProfileSettings()
    })
})