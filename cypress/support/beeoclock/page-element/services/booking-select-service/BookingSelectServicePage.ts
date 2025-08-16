import {BookingSelectServicePageElement} from "./BookingSelectServicePageElement";
import {ApiInterceptionHelper} from "../../../common/Interception/ApiInterceptionHelper";
import {ServicesPages} from "../ServicesPages";


export class BookingSelectServicePage {
    private selectComponent = BookingSelectServicePageElement.OptionElement

    public selectSpecificOrder(order: string, count?: string): BookingSelectServicePage {
        this.verifyCorrectForm()
        cy.wait(1000)// TODO temp wait for re-render app
        this.selectComponent.getAddButton(order)
            .click().then((): void => {
            this.selectComponent.getMinusButton(order)
            if (count) {
                this.selectComponent.getElement(order).should('have.prop', 'innerText').and('include', count)
            }
        })
        return this;
    }

    public clickSelectSpecialistAndOrder(slot?: string): BookingSelectServicePage {
        const getSlot: string = ApiInterceptionHelper.getSlot()
        cy.get('service-list').contains('Wybierz specjalistę i datę')
            .click()
        ApiInterceptionHelper.waitForAlias(getSlot)
        this.assertSelectTimeComponentVisibility()

        // additionally assertions -> await to UI show list of available slots
        if (slot) {
            cy.log('slot', JSON.stringify(slot))
            ServicesPages.SelectTimePage.assertSpecificTime(slot);
        }
        return this;
    }

    public selectNextSpecificOrder(order: string): BookingSelectServicePage {
        BookingSelectServicePageElement.OptionElement.getElement(order)
            .click()
        cy.wait(1000)
        return this;
    }

    public verifyCorrectForm(): BookingSelectServicePage {

        cy.get('tab-menu').contains('li', 'Usługi').should('be.visible').and('have.class', 'active');
        cy.get('tab-menu').contains('li', 'Produkty').scrollIntoView().should('be.visible').and('not.have.class', 'active');
        cy.get('tab-menu').contains('li', 'O nas').scrollIntoView().should('be.visible').and('not.have.class', 'active');
        return this;
    }

    public verifyHrefAddress(): BookingSelectServicePage {
        cy.get('.self-stretch.text-xl')
            .should(($el): void => {
                const actualText = $el.prop('textContent').replace(/\s+/g, ' ').replace(/&nbsp;/g, ' ').trim();
                const expectedText = 'Haircut&Barber';

                const cleanActualText = actualText.replace(/\s+/g, ' ');
                const cleanExpectedText = expectedText.replace(/\s+/g, ' ');

                expect(cleanActualText).to.include(cleanExpectedText);
            })

        return this;
    }

    public verifyGivenHrefAddress(address: string): BookingSelectServicePage {
        cy.get('.brake-all.w-full.text-sm.font-medium.leading-normal')
            .should(($el): void => {
                const actualText = $el.prop('textContent').replace(/\s+/g, ' ').replace(/&nbsp;/g, ' ').trim();
                const expectedText = address;

                const cleanActualText = actualText.replace(/\s+/g, ' ');
                const cleanExpectedText = expectedText.replace(/\s+/g, ' ');

                expect(cleanActualText).to.include(cleanExpectedText);
            })
            .should('be.visible');
        return this;
    }

    private assertSelectTimeComponentVisibility(): BookingSelectServicePage {
        const selectors: string[] = ['time-slot-and-specialist-step', 'select-specialist-circle', 'event-select-slot-form-component', 'event-select-slot-date-form-component', 'event-select-slot-time-form-component']

        for (const selector of selectors) {
            cy.get(selector).should('be.visible')
        }
        return this
    }
}
