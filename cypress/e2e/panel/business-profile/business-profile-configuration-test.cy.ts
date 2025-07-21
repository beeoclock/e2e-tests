import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "../../../support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {BusinessProfilePages} from "../../../support/beeoclock/page-element/configuration/business-profile/BusinessProfilePages";
import {PhotoResourceHelper, PhotoResourceName} from "../../../fixtures/photo/PhotoResourceHelper";

describe("Test name", function (){

    before('setup', () => {
        cy.loginOnPanel()
        LeftMenuPage.clickOnGivenTab(TabNameEnum.BUSINESS_PROFILE, false);
    })

    it('test body', function () {
        BusinessProfilePages.BusinessProfileLogoPage
            .clickAttachPhoto(PhotoResourceHelper.getPhotoPath(PhotoResourceName.LOREM_IPSUM))
            .clickSaveWhenAttachPhoto()
            .verifyAssignedPhoto(PhotoResourceName.LOREM_IPSUM)
    })
})