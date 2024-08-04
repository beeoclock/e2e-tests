import {RightPanelServicesPageElement} from "./RightPanelServicesPageElement";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";
import type = Mocha.utils.type;
import {SelectSpecificHour} from "./time/SelectSpecificHour";

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

    public selectHour(): RightPanelServicesPage {
        // Click the time button to open the dropdown
        cy.wait(500);
        RightPanelServicesPageElement.SelectTimeButton.getElement().click();
        cy.wait(1000); // Wait for the dropdown to appear


        // Alias the element
        // cy.log('click on hour == ' + hour)
        // RightPanelServicesPageElement.SelectSpecificHour.getElement()
// Znajdź pozycję elementu i przewiń do określonej pozycji

// RightPanelServicesPageElement.SelectSpecificHour.getElement().shadow().eq(2).scrollIntoView()

        // cy.get('#ion-overlay-4 > .ion-delegate-host > .ng-untouched')
        //     .find('ion-picker-column').first()
            //this is 2
            // .find('ion-picker-column-option').next().prev().first().scrollIntoView().click()

        //this is 3
            // .find('ion-picker-column-option').next().first().scrollIntoView().click()


            // .find('ion-picker-column-option').first().scrollIntoView().click()
            // .type('{uparrow}', {force: true})

        // cy.get(RightPanelServicesPageElement.SelectSpecificHour.getElement())
        cy.get('#ion-overlay-4 > .ion-delegate-host > .ng-untouched')
            .find('ion-picker-column').first()
            // .find('ion-picker-column-option').as('hours')
            .find('ion-picker-column-option').should('have.length', 24 )
        // for (let i = 0; i < 22; i++) {

        // cy.get('@hours').first().as('hour2').then(() => {
        //     cy.get('@hour2').scrollIntoView().click()
        //     cy.get('@hour2').shadow()
        //         .contains('01').first().click()
        // })
        //     // .eq(0)
        //     .scrollIntoView()
        //     .click()
        // cy.document().trigger('keydown', { key: 'PageUp' });



        // .prev().as('expectedhourd')
        // }
// cy.get('@expectedhourd').scrollIntoView().click()
        // RightPanelServicesPageElement.SubmitButton.getElement().click()
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
