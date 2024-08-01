import {RightPanelServicesPageElement} from "./RightPanelServicesPageElement";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";
import type = Mocha.utils.type;

export class RightPanelServicesPage {

    public clickAddOrderButton(): RightPanelServicesPage {
        RightPanelServicesPageElement.AddOrderButton.getElement()
            .click()
        return this
    }

    public clickAddServiceButton(): RightPanelServicesPage {
        RightPanelServicesPageElement.AddServiceButton.getElement()
            .click()
        return this
    }

    public clickSelectServiceButton(): RightPanelServicesPage {
        const getService = ApiInterceptionHelper.getService()
        RightPanelServicesPageElement.SelectServiceButton.getElement()
            .click()
        ApiInterceptionHelper.waitForAlias(getService)
        return this
    }

    public selectSpecificService(service: string): RightPanelServicesPage {
        RightPanelServicesPageElement.SelectSpecificServiceCheckbox.getElement(service)
            .click()
        return this;
    }

    public verifySelectedService(service: string): RightPanelServicesPage {
        RightPanelServicesPageElement.SelectedServiceElement.getElement()
            .should('have.prop', 'innerText').and('include', service + '\n' + 'PL')
        return this;
    }

    public selectHour(hour: string): RightPanelServicesPage {
        // Click the time button to open the dropdown
        RightPanelServicesPageElement.SelectTimeButton.getElement().click();
        cy.wait(1000); // Wait for the dropdown to appear
        cy.wait(500);

        // Alias the element
        cy.log('click on hour == ' + hour )
        RightPanelServicesPageElement.SelectSpecificHour.getElement(hour).click()

        return this;
    }


    // public selectOrderTime(hour: number, minute: string): RightPanelServicesPage {
    //     RightPanelServicesPageElement.SelectTimeButton.getElement()
    //         .click().then(() => {
    //         if (hour) {
    //             RightPanelServicesPageElement.SelectSpecificHour.getElement()
    //                 .click().then((): void => {
    //                 RightPanelServicesPageElement.SelectSpecificMinute.getElement(minute)
    //             })
    //         }
    //         RightPanelServicesPageElement.SelectSpecificMinute.getElement(minute)
    //             .click()
    //     })
    //     RightPanelServicesPageElement.SubmitButton.getElement().click()
    //     return this;
    // }

    public selectPriceOfService(price: string): RightPanelServicesPage {
        RightPanelServicesPageElement.OrderPriceInput.getElement()
            .clear()
            .type(price)
        return this;
    }

    public selectSpecialist(specialist: string): RightPanelServicesPage {
        RightPanelServicesPageElement.SelectSpecialist.getElement(specialist)
            .click()
        return this;
    }

    public typeOrderDate(date: string): RightPanelServicesPage {
        const input = RightPanelServicesPageElement.OrderDateInput.getElement()
            .click().then(() => {
                input.type(date, {force: true})
            })
        return this;
    }

    public typePublicNoteInput(publicNote: string): RightPanelServicesPage {
        RightPanelServicesPageElement.PublicNoteInput.getElement()
            .type(publicNote)
        return this;
    }

    public clickAddButton(): RightPanelServicesPage {
        RightPanelServicesPageElement.AddButton.getElement()
            .click()
        return this;
    }

}
