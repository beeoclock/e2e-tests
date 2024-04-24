import { BookingLastPageElement } from "./BookingLastPageElement";

export class BookingLastPage {
    public selectNextDay(): BookingLastPage {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        const nextDay = currentDate.getDate();

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const nextDayName = daysOfWeek[currentDate.getDay()];

        BookingLastPageElement.ChooseADateAndTimeBtn.getElement()
            .click()
        return this;

    }
}