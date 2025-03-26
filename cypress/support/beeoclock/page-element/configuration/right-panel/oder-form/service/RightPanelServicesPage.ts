import {RightPanelServicesPageElement} from "./RightPanelServicesPageElement";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";
import {CustomerTypeEnum} from "./enum/CustomerTypeEnum";
import {NotificationsPage} from "../../../notiifcations/NotificationsPage";

export class RightPanelServicesPage {

    public clickAddOrderButton(): RightPanelServicesPage {
        RightPanelServicesPageElement.AddOrderButton.getElement()
            .click()
        return this
    }

    public clickAddServiceButton(): RightPanelServicesPage {
        RightPanelServicesPageElement.AddServiceButton.getElement()
            .click()
        cy.wait(2000)
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
        RightPanelServicesPageElement.SelectSpecificServiceCheckbox.getPlusButton(service)
            .click()
        return this;
    }

    public unSpecificService(service: string): RightPanelServicesPage {
        RightPanelServicesPageElement.SelectSpecificServiceCheckbox.getMinusButton(service)
            .click()
        return this;
    }

    public verifySelectedService(amount: string, price: string, duration: string): RightPanelServicesPage {
        this.verifyAmountOfTotalService(amount)
        this.verifyTotalPrice(price)
        this.verifyTotalDuration(duration)
        return this;
    }

    private verifyAmountOfTotalService(amount: string): RightPanelServicesPage {
        RightPanelServicesPageElement.SelectedServiceElement.getAmountOfSelectedService()
            .should('have.prop', 'outerText').and('include', amount)
        return this
    }

    private verifyTotalPrice(price: string): RightPanelServicesPage {
        RightPanelServicesPageElement.SelectedServiceElement.getTotalPrice()
            .should('have.prop', 'textContent').and('include', price)
        return this
    }

    private verifyTotalDuration(duration: string): RightPanelServicesPage {
        RightPanelServicesPageElement.SelectedServiceElement.getTotalDuration()
            .should('have.prop', 'textContent').and('include', duration)
        return this
    }


    public openSelectTime(): RightPanelServicesPage {
        cy.wait(500)
        cy.get('app-duration-chip-component').scrollIntoView().should('be.visible')
            .click()
        cy.wait(500)
        return this;
    }

    public selectHour(hour?: string): RightPanelServicesPage {
        if (hour == '2') {
            cy.get('.ion-delegate-host > .ng-untouched')
                .find('ion-picker-column').last().prev()
                .find('ion-picker-column-option').eq(0).scrollIntoView().click()
            cy.wait(1000)
        } else {
        }
        return this;
    }

    public selectMinute(minute?: string): RightPanelServicesPage {
        if (minute == '2') {
            cy.get('.ion-delegate-host > .ng-untouched')
                .find('ion-picker-column').last().scrollIntoView()
                .find('ion-picker-column-option').eq(0).scrollIntoView().click()
        }
        if (minute == '30') {
            cy.get('.ion-delegate-host > .ng-untouched')
                .find('ion-picker-column').last().scrollIntoView()
                .find('ion-picker-column-option').eq(28).scrollIntoView().click()
        }
        return this;
    }

    public clickSubmitSelectedTime(): RightPanelServicesPage {
        cy.wait(1500)
        RightPanelServicesPageElement.SubmitButton.getElement()
            .click()
        return this;
    }

    public selectPriceOfService(price: string): RightPanelServicesPage {
        RightPanelServicesPageElement.OpenPriceInputElement.getElement()
            .click({force: true})
        cy.wait(200)
        this.typePrice(price)
        cy.wait(200)
        return this;
    }

    public selectSpecialist(specialist: string): RightPanelServicesPage {
        RightPanelServicesPageElement.SelectSpecialist.getElement(specialist)
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

    public typePrice(price: string, sendEmail: boolean = false): RightPanelServicesPage {
        RightPanelServicesPageElement.OrderPriceInput.getElement()
            .clear()
            .type(price).then(() => {
            cy.contains('button', 'Potwierdź').click().then(() => {
                if (sendEmail) {
                    NotificationsPage.handleEmailNotificationsToggle(sendEmail)
                }
            })
        })
        return this;
    }

    //CUSTOMER
    public clickOpenCustomerPopover(): RightPanelServicesPage {
        cy.wait(500)
        cy.document().its('readyState').should('equal', 'complete')
        RightPanelServicesPageElement.SelectCustomerOption.getElement()
            .click().then(() => {
            cy.get('.ion-padding').then((visible) => {
                if (!visible) {
                    cy.log('again')
                    RightPanelServicesPageElement.SelectCustomerOption.getElement().click();
                }
            });
        });
        return this;
    }

    public selectSpecificCustomerType(type: string): RightPanelServicesPage {
        if (type == CustomerTypeEnum.NEW) {
            RightPanelServicesPageElement.SelectSpecificCustomerOption.getElement(type, 1).as('button')
        }
        if (type == CustomerTypeEnum.CLIENT) {
            RightPanelServicesPageElement.SelectSpecificCustomerOption.getElement(type, 0).as('button')
        }
        if (type == CustomerTypeEnum.GUEST) {
            RightPanelServicesPageElement.SelectSpecificCustomerOption.getElement(type, 2).as('button')
        }
        if (type == CustomerTypeEnum.ANONYMOUS) {
            RightPanelServicesPageElement.SelectSpecificCustomerOption.getElement(type, 3).as('button')
        }
        cy.get('@button').should('exist')
        cy.get('@button').click({force: true})
        cy.wait(1000)
        return this;
    }

    public clickNextButton(): RightPanelServicesPage {
        RightPanelServicesPageElement.NextButton.getElement()
            .click({force: true})
        return this
    }
}
