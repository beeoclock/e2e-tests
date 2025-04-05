import {BusinessDeletionComponent} from "./element/BusinessDeletionComponent";
import {BusinessProfileInterception} from "../../../../../common/Interception/business-profile/BusinessProfileInterception";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";

export class BusinessProfileDeletionPage {
    private element = new BusinessDeletionComponent()

    public clickDeleteButton(): BusinessProfileDeletionPage {
        this.element.getDeleteButton().click().then(() => {
            this.assertDeletionModal()
        })
        return this;
    }

    public clickDeleteButtonOnModal(profileName: string): BusinessProfileDeletionPage {
        const getDeleteBusinessProfile = BusinessProfileInterception.getDeleteBusinessProfile(profileName);
        const getBusinessProfile = BusinessProfileInterception.getIdentityProfile();
        this.element.getDeleteButtonOnModal()
            .click()
        ApiInterceptionHelper.waitForAlias(getDeleteBusinessProfile)
        ApiInterceptionHelper.waitForAlias(getBusinessProfile)
        return this;
    }

    private assertDeletionModal(): BusinessProfileDeletionPage {
        cy.get('h2').should('have.text', 'Usuń klienta biznesowego')
        cy.get('h3').should('have.text', 'Po usunięciu klienta biznesowego nie ma możliwości powrotu. Upewnij się.')
        cy.get('.alert-message.sc-ion-alert-ios').should('have.text', 'Czy na pewno chcesz usunąć klienta biznesowego, wszystkie dane zostaną usunięte i nie będzie można ich przywrócić, a wszyscy użytkownicy, którzy mieli dostęp do tego klienta biznesowego, również utracą dostęp, jeśli chcesz tylko opuścić tego klienta biznesowego, kliknij przycisk „Wyjdź z tego klienta biznesowego”.')
        return this;
    }
}