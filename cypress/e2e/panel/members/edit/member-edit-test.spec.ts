import {LeftMenuPage} from "support/beeoclock/page-element/configuration/left-menu/LeftMenuPage"
import {
    TableCommonPage
} from "../../../../support/beeoclock/page-element/configuration/tab/common/table/TableCommonPage";
import {RightPanelPages} from "../../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {ServiceNameEnum} from "../../../../support/beeoclock/page-element/common/enum/ServiceNameEnum";
import {CommonElementPage} from "../../../../support/beeoclock/page-element/common/common-element/CommonElementPage";

describe('member edit test', (): void => {

    it('member edit test', function (): void {
        TableCommonPage
            .clickActionButton('Tomasz@zalewski.p')
            .clickGivenActionButton('Edytuj')
        RightPanelPages.MemberRightPanel
            .clickServiceStatus()
            .clickSelectService()
            .selectService(ServiceNameEnum.BREAD_TRIM)
        CommonElementPage.bodyEscape()
        RightPanelPages.MemberRightPanel
            .assertSelectedService(ServiceNameEnum.BREAD_TRIM)
            .clickSaveButton()
    })

    beforeEach('login', (): void => {
        cy.loginOnPanel()
        LeftMenuPage.clickMembersTab()


    })
})