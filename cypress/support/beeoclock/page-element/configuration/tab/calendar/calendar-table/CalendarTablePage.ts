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
                cy.get('whac-a-mole').scrollIntoView().should('be.visible')
            })
        return this;
    }

    public findAndVerifyOrderTableElement(specialistFirstName: string, specialistLastName: string): CalendarTablePage {
        CalendarTablePageElement.OrderTableElement.getElement(specialistFirstName, specialistLastName).should('exist')
        return this;
    }

    public clickOnGivenOrderByItsId(orderId: string): CalendarTablePage {
        LeftMenuPage.assertIsSynchronized(true)
        CalendarTablePageElement.OrderTableElement.getElementByOrderId(orderId)
            .click()
            .then(() => {
                cy.get('whac-a-mole').scrollIntoView().should('be.visible')
                cy.get('app-item-list-v2-service-form-order-component').scrollIntoView().should('be.visible')
                cy.get('event-container-details-component').scrollIntoView().should('be.visible')
                cy.get('event-meta-details').scrollIntoView().should('be.visible')
                cy.get('.truncate.font-bold').contains('Szczegółowy widok wydarzenia').scrollIntoView().should('be.visible')
                cy.get('.bi.bi-dash-circle').scrollIntoView().should('be.visible')
                cy.document().its('readyState').should('equal', 'complete')
                LeftMenuPage.assertIsSynchronized(true)
            })
        return this;
    }

    public verifyTimeOrderOnTable(orderId, value: string): CalendarTablePage {
        CalendarTablePageElement.OrderTableElement.getElementByOrderId(orderId)
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