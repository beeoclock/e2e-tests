import {BookingSelectServicePageElement} from "./BookingSelectServicePageElement";
import {ApiInterceptionHelper} from "../../../common/Interception/ApiInterceptionHelper";

export class BookingSelectServicePage {
    private selectComponent = BookingSelectServicePageElement.OptionElement

    public selectSpecificOrder(order: string, count?: string): BookingSelectServicePage {
        this.verifyCorrectForm()
        cy.wait(1000)// TODO temp wait for re-render app
        this.selectComponent.getAddButton(order)
            .click().then(() => {
            this.selectComponent.getMinusButton(order)
            if (count) {
                this.selectComponent.getElement(order).should('have.prop', 'innerText').and('include', count)
            }
        })
        return this;
    }

    public clickSelectSpecialistAndOrder(): BookingSelectServicePage {
        const getSlot = ApiInterceptionHelper.getSlot()
        cy.get('service-list').contains('Wybierz specjalistę i datę')
            .click()
        ApiInterceptionHelper.waitForAlias(getSlot)
        return this;
    }

    public selectNextSpecificOrder(order: string): BookingSelectServicePage {
        BookingSelectServicePageElement.OptionElement.getElement(order)
            .click()
        cy.wait(1000)
        return this;
    }

    public verifyCorrectForm(): BookingSelectServicePage {
        const serviceTab = cy.get('tab-menu')
        serviceTab.should('have.attr', 'ng-reflect-selected-tab').and('equal', 'services')
        cy.get('tab-menu').find('li').contains('Produkty').scrollIntoView().should('be.visible')
        cy.get('tab-menu').find('li').contains('O nas').scrollIntoView().should('be.visible')
        return this;
    }

    public verifyHrefAddress(): BookingSelectServicePage {
        cy.get('.flex.items-start > .text-xl')
            .should(($el) => {
                const actualText = $el.prop('textContent').replace(/\s+/g, ' ').replace(/&nbsp;/g, ' ').trim();
                const expectedText = 'Juliusza Słowackiego 80, Piotrków trybunalski, Polska, 97-300';

                const cleanActualText = actualText.replace(/\s+/g, ' ');
                const cleanExpectedText = expectedText.replace(/\s+/g, ' ');

                expect(cleanActualText).to.include(cleanExpectedText);
            })
            .should('be.visible');
        return this;
    }

    public verifyGivenHrefAddress(address: string): BookingSelectServicePage {
        cy.get('.flex.items-start > .text-xl')
            .should(($el) => {
                const actualText = $el.prop('textContent').replace(/\s+/g, ' ').replace(/&nbsp;/g, ' ').trim();
                const expectedText = address;

                const cleanActualText = actualText.replace(/\s+/g, ' ');
                const cleanExpectedText = expectedText.replace(/\s+/g, ' ');

                expect(cleanActualText).to.include(cleanExpectedText);
            })
            .should('be.visible');
        return this;
    }
}
