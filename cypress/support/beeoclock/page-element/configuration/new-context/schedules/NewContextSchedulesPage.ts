import {NewContextSchedulesElement} from "./element/NewContextSchedulesElement";
import {QueryAssertion} from "../../../../common/assertion/QueryAssertion";

export class NewContextSchedulesPage {
    private element = new NewContextSchedulesElement()

    public clickOnGivenDay(index: number): NewContextSchedulesPage {
        this.element.getGivenDayElement(index).click()
        return this
    }

    public assertGivenDayIsSelected(index: number): NewContextSchedulesPage {
        this.element.getGivenDayElement(index)
            .should('have.class', 'bg-blue-500')
            .and('have.class', 'border-blue-600');
        return this
    }

    public assertGivenDayIsNotSelected(index: number): NewContextSchedulesPage {
        this.element.getGivenDayElement(index)
            .should('not.have.class', 'bg-blue-500')
            .should('not.have.class', 'border-blue-600')
            .should('have.class', 'border')
            .should('have.class', 'border-beeColor-200');
        return this;
    }

    public typeTimeStart(start: string): NewContextSchedulesPage {
        this.element.getTimeStartElement().clear().type(start);
        return this;
    }

    public typeTimeEnd(end: string): NewContextSchedulesPage {
        this.element.getTimeEndElement().clear().type(end);
        return this;
    }

    public clickNextButton(): NewContextSchedulesPage {
        cy.contains('button', 'Dalej').click();
        return this;
    }

    public assertState(): NewContextSchedulesPage {
        QueryAssertion.verifyCorrectUrl('https://crm.dev.beeoclock.com/identity/create-business/schedules')
        return this
    }

    public readonly dayIndex = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 7,
    } as const;
}