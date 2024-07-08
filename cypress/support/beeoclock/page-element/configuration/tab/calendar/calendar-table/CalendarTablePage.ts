import {CalendarTablePageElement} from "./CalendarTablePageElement";

export class CalendarTablePage {

    public verifyTableElement(specialist: string, index: number): CalendarTablePage {
        CalendarTablePageElement.SpecificTableElement.getElement(specialist, index)
        return this;
    }

    public clickOnGivenDayPlusOneHour(specialist: string, index: number): CalendarTablePage {
        CalendarTablePageElement.SpecificTableElement.getElement(specialist, index)
            .click()
        return this;
    }
}