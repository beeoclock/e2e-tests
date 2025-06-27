import {SelectTimePageElement} from "./SelectTimePageElement";
import {DateUtils} from "../../../../backend/Utils/DateUtils";

export class SelectTimePage {

    public selectSpecificTime(time: string): SelectTimePage {
        SelectTimePageElement.SelectSpecificTime.getElement(time)
            .click();
        return this;
    }

    public assertSpecificTime(time: string): SelectTimePage {
        const currentHour = parseInt(DateUtils.getCurrentHour(), 10);
        const currentMinute = parseInt(DateUtils.getCurrentMinutes(), 10);

        if (currentHour < 10) {
            cy.log('Current time is before 10:00 – forcing slot to 12:00');
            SelectTimePageElement.SelectSpecificTime.getElement('12:00');
        } else if (currentHour < 20 && currentMinute > 0) {
            cy.log('Time is before 20:00 and minutes > 0 – forcing 20:00 slot');
            SelectTimePageElement.SelectSpecificTime.getElement('20:00');
        } else {
            SelectTimePageElement.SelectSpecificTime.getElement(time);
        }
        return this;
    }

    public verifySelectedTime(time: string): SelectTimePage {
        SelectTimePageElement.SelectedDayAssert.getElement(time)
            .should('have.class', 'bg-yellow-400').and('not.have.class', 'bg-gray-800')
        return this;
    }

    public verifyGivenSlotByActualTime(time: string): SelectTimePage {
        const [hourStr, minuteStr] = time.split(':');
        const slotHour = parseInt(hourStr, 10);
        const slotMinute = parseInt(minuteStr, 10);

        const validMinutes = ['00', '15', '30', '45'];

        if (slotHour > 20 || (slotHour === 20 && slotMinute > 0)) {
            cy.log(`${time} is after 20:00 – no available slots`);
            SelectTimePageElement.SelectSpecificTime.getNotExistingElement(time);
        } else if (!validMinutes.includes(minuteStr)) {
            cy.log(`${time} has invalid minutes – valid are: 00, 15, 30, 45`);
            SelectTimePageElement.SelectSpecificTime.getNotExistingElement(time);
        } else {
            SelectTimePageElement.SelectSpecificTime.getElement(time);
        }
        return this;
    }

    public verifyGivenSlotNotExisting(time: string): SelectTimePage {
        SelectTimePageElement.SelectSpecificTime.getNotExistingElement(time);
        return this;
    }

    public verifySlotLength(length: number): SelectTimePage {
        SelectTimePageElement.SelectSpecificTime.getElements()
            .should('have.length', length)
        return this
    }

    public clickBackByButton(): SelectTimePage {
        const element = cy.get('utility-header-component').find('.bi.bi-x-lg').scrollIntoView().should('be.visible')
        element.click();
        return this
    }
}