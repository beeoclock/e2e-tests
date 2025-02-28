import {CalendarTablePageElement} from "./CalendarTablePageElement";
import {LeftMenuPage} from "../../../left-menu/LeftMenuPage";

export class CalendarTablePage {

    public verifyTableElement(specialist: string, index: number): CalendarTablePage {
        CalendarTablePageElement.SpecificTableElement.getElement(specialist, index)
        return this;
    }

    public clickOnGivenAndHour(specialist: string, index: number): CalendarTablePage {
        CalendarTablePageElement.SpecificTableElement.getElement(specialist, index)
            .click({force: true})
            .then(() => {
                cy.get('whac-a-mole').scrollIntoView().should('be.visible')})
        return this;
    }

    public findAndVerifyOrderTableElement(specialistFirstName: string, specialistLastName: string): CalendarTablePage {
        CalendarTablePageElement.OrderTableElement.getElement(specialistFirstName, specialistLastName).should('exist')
        return this;
    }

    public clickOnGivenOrderByItsId(orderId: string): CalendarTablePage {
        CalendarTablePageElement.OrderTableElement.getIdElement(orderId)
            .click()
            .then(() => {
                cy.get('whac-a-mole').scrollIntoView().should('be.visible')
                cy.get('app-item-list-v2-service-form-order-component').scrollIntoView().should('be.visible')
                cy.get('event-container-details-component').scrollIntoView().should('be.visible')
                cy.get('event-meta-details').scrollIntoView().should('be.visible')
                cy.get('.truncate.font-bold').contains('Szczegółowy widok wydarzenia').scrollIntoView().should('be.visible')
            })
        return this;
    }

    public verifyTimeOrderOnTable(specialistFirstName: string, specialistLastName: string, value: string): CalendarTablePage {
        CalendarTablePageElement.OrderTableElement.getElement(specialistFirstName, specialistLastName)
            .invoke('prop', 'textContent')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = value.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public clickOrderTableElement(specialistFirstName: string, specialistLastName: string): CalendarTablePage {
        CalendarTablePageElement.OrderTableElement.getElement(specialistFirstName, specialistLastName)
            .click({force: true}).then(() => {
            cy.get('whac-a-mole-container').should('be.visible')
        })
        return this;
    }

    public assertAbsenceOnTable(value: string): CalendarTablePage {
        CalendarTablePageElement.AbsenceTableElement.getElement()
            .invoke('prop', 'outerText').then(outerText => {
                expect(outerText).to.include(value)
        })
        return this;
    }
}