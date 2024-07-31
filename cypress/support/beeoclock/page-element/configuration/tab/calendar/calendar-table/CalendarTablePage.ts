import {CalendarTablePageElement} from "./CalendarTablePageElement";

export class CalendarTablePage {

    public verifyTableElement(specialist: string, index: number): CalendarTablePage {
        CalendarTablePageElement.SpecificTableElement.getElement(specialist, index)
        return this;
    }

    public clickOnGivenAndHour(specialist: string, index: number): CalendarTablePage {
        CalendarTablePageElement.SpecificTableElement.getElement(specialist, index)
            .click()
        return this;
    }

    public findAndVerifyOrderTableElement(specialistFirstName: string, specialistLastName: string): CalendarTablePage {
        CalendarTablePageElement.OrderTableElement.getElement(specialistFirstName, specialistLastName).should('exist')
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

}