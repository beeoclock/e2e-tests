import {MemberRightPanelElement} from "./element/MemberRightPanelElement";
import {MemberApiInterceptionHelper} from "../../../../common/Interception/member/MemberApiInterceptionHelper";
import {ApiInterceptionHelper} from "../../../../common/Interception/ApiInterceptionHelper";

export class MemberRightPanel {
    private element = new MemberRightPanelElement()

    public typeEmail(email: string): MemberRightPanel {
        this.element.getEmailInput().type(email)
        return this;
    }

    public typeFirsName(name: string): MemberRightPanel {
        this.element.getFirstNameInput().type(name)
        return this;
    }

    public typeLastName(name: string): MemberRightPanel {
        this.element.getLastNameInput().type(name)
        return this;
    }

    public typePhone(phone: string): MemberRightPanel {
        this.element.getPhoneInput().type(phone)
        return this;
    }

    public clickActiveStatus(): MemberRightPanel {
        this.element.getStatusToggle().click()
        return this;
    }

    public clickServiceStatus(): MemberRightPanel {
        this.element.getServiceToggle().click()
        return this;
    }

    public clickSelectService(): MemberRightPanel {
        this.element.getSelectService().click()
        return this;
    }

    public selectService(service: string): MemberRightPanel {
        this.element.getGivenServiceOption(service).click()
        return this;
    }

    public assertSelectedService(service: string | string[]): MemberRightPanel {
        if (Array.isArray(service)) {
            service.forEach((item) => {
                this.element.getSelectedService().should('contain', item)
            })
        } else {
            this.element.getSelectedService().should('contain', service)
        }
        return this;
    }

    public clickSaveButton(): MemberRightPanel {
        // const updateMember = MemberApiInterceptionHelper.updateMember()
        const getMember = MemberApiInterceptionHelper.getGivenMember()
        cy.contains('button', 'Zapisz').click()
        ApiInterceptionHelper.waitForAlias(getMember)
        return this
    }
}