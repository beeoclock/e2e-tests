import {BusinessProfilePageElement} from "./element/BusinessProfileLogoComponent";
import {CommonElementPage} from "../../../common/common-element/CommonElementPage";
import {BusinessProfileInterception} from "../../../../common/Interception/business-profile/BusinessProfileInterception";
import {PhotoResourceHelper, PhotoResourceName} from "../../../../../../fixtures/photo/PhotoResourceHelper";

export class BusinessProfileLogoPage {
    private element = new BusinessProfilePageElement()

    public clickAttachPhoto(photoPath: string): BusinessProfileLogoPage {
        this.element.getAttachButton().click()
        this.element.getAttachPhoto().attachFile(photoPath)
        return this;
    }

    public clickSaveWhenAttachPhoto(): BusinessProfileLogoPage {
        const patchWhenUpdatePhoto = BusinessProfileInterception.PatchWhenUpdatePhoto()
        CommonElementPage.clickSaveButton()
        cy.wait('@' + patchWhenUpdatePhoto)
        return this;
    }

    public verifyAssignedPhoto(photoName: PhotoResourceName): BusinessProfileLogoPage {
        PhotoResourceHelper.getPhotoCurrentSrc(photoName, 1000);
        cy.get('@photoSrc').then(src => {
            this.element.getAssignedPhoto().invoke('prop', 'currentSrc').then((currentSrc: string) => {
                const slicedSrc = currentSrc.slice(0, 1000)
                expect(src).to.contain(slicedSrc);
            })
        })
        return this
    }
}