import {SelectTimePageElement} from "./SelectTimePageElement";
import {DateUtils} from "../../../../backend/Utils/DateUtils";

export class SelectTimePage {

    public selectSpecificTime(time: string): SelectTimePage {
        SelectTimePageElement.SelectSpecificTime.getElement(time)
            .click();
        return this;
    }

    public assertSpecificTime(time: string): SelectTimePage {
        // If the current time is less than 10, the time will be 12:00
        if (parseInt(DateUtils.getCurrentHour()) < 10) {
            SelectTimePageElement.SelectSpecificTime.getElement('12:00')
        } else {
            SelectTimePageElement.SelectSpecificTime.getElement(time)
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

        // Check if the given time is after 20:00, if so, no available slots
        if (slotHour > 20 || (slotHour === 20 && slotMinute > 0)) {
            cy.log(`${time} is after 20:00, no available slots`);
            SelectTimePageElement.SelectSpecificTime.getNotExistingElement(time);
        }
        // Check if the time is not a valid slot (not 00, 15, 30, or 45)
        else if (!validMinutes.includes(minuteStr)) {
            cy.log(`${time} is not a valid time slot. Valid time slots are 00, 15, 30, 45`);
            SelectTimePageElement.SelectSpecificTime.getNotExistingElement(time);
        }
        // Otherwise, check for the available slot
        else {
            SelectTimePageElement.SelectSpecificTime.getElement(time);
        }
        return this;
    }

    public verifyGivenSlotNotExisting(time: string): SelectTimePage {
        SelectTimePageElement.SelectSpecificTime.getNotExistingElement(time);
        return this;
    }

    public clickBackByButton(): SelectTimePage {
        const element = cy.get('utility-header-component').find('.bi.bi-x-lg').scrollIntoView().should('be.visible')
        element.click();
        return this
    }
}