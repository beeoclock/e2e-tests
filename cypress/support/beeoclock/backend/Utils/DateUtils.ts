import "moment-timezone/index";
import dayjs from 'dayjs';

import moment = require('moment');

export class DateUtils {

    public static setCurrentDateMinusDays(minusDays: number): string {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - minusDays);
        return currentDate.getFullYear() + "." + (currentDate.getMonth() + 1) + "." + currentDate.getDate();
    }

    public static setCurrentDatePlusDays(plusDays: number, format: string) {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + plusDays);
        return moment(currentDate).format(format)
    }

    public static setCurrentDatePlusDaysAndHours(plusDays: number, format: string, plusHours: number): string {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + plusDays);
        currentDate.setHours(currentDate.getHours() + plusHours);
        return moment(currentDate).format(format);
    }

    public static setCurrentDateMinusHour(format: string): string {
        let currentDate = new Date();
        currentDate.setHours(currentDate.getHours() - 1);
        return moment(currentDate).format(format);
    }

    public static setCurrentDate(format: string): string {
        let currentDate = new Date();
        currentDate.setHours(currentDate.getHours());
        return moment(currentDate).format(format);
    }

    public static getCurrentTime(): number {
        return new Date(Date.now()).getTime();
    }

    public static getCurrentMoment(): string {
        const currentDate = moment();
        const newDate = currentDate
        return newDate.format("DD.MM.YYYY HH:mm:ss");
    }

    public static getCurrentDatePlusOneHour(): string {
        let currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 1);
        return moment(currentDate).format("DD.MM.YYYY HH:mm:ss");
    }

    public static getCurrentTimePlusOneHourFormatted(): string {
        let currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 1);

        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');

        return `${hours}:${minutes}`;
    }

    public static getCurrentTimeMinusHoursFormatted(hours: number): string {
        let currentDate = new Date();
        currentDate.setHours(currentDate.getHours() - hours);
        return moment(currentDate).toISOString();
    }

    public static getCurrentTimePlusOneYear(): string {
        const currentDate = moment();
        const newDate = currentDate.add(1, 'year');

        return newDate.format("DD.MM.YYYY HH:mm:ss");
    }

    public static getCurrentDatePlusDays(days: number): string {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + days);
        return moment(currentDate).format("DD.MM.YYYY");
    }

    public static getCurrentDateWithGivenFormat(format: string): string {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate());
        return moment(currentDate).format(format);
    }

    public static convertDateToDatetimeInput(dateString, timeString) {

        const [day, month, year] = dateString.split('.');
        const [hours, minutes] = timeString.split(':');
        const date = new Date(`${year}-${month}-${day}`);

        date.setHours(parseInt(hours, 10));
        date.setMinutes(parseInt(minutes, 10));
        date.setSeconds(0);

        const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
        return formattedDate;
    }

    public static convertDatetimeToCustomFormat(datetimeString: string): string {
        const [datePart, timePart] = datetimeString.split('T');
        const [hours, minutes] = timePart.split(':');

        const formattedDatetime = `${datePart} ${hours}:${minutes}`;

        return formattedDatetime;
    }


    public static getCurrentDatePlusDaysFormatted(days: number): string {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + days);
        return moment(currentDate).toISOString();
    }

    public static getCurrentDateMinusDaysFormatted(days: number): string {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - days);
        return moment(currentDate).toISOString();
    }

    public static getCurrentDateFormatted(): string {
        const currentDate = moment();
        const newDate = currentDate
        return newDate.format("YYYY-MM-DD");
    }

    public static getCurrentDatePlusGivenDay(days: number): string {
        const currentDate = moment();
        const newDate = currentDate.add(days, 'days');
        return newDate.format("YYYY-MM-DD");
    }

    public static getCurrentDate(): string {
        const currentDate = moment();
        const newDate = currentDate
        return newDate.format("DD.MM.YYYY");
    }

    public static getCurrentHourFormatted(): string {
        const currentTime = moment();
        return currentTime.format("HH_mm");
    }

    public static getCurrentHourWithMinutes(): string {
        return dayjs().format("HH:mm")
    }

    public static assertCurrentTimeMatches(actualTime: string): void {
        const expectedTime = this.getCurrentHourWithMinutes();
        const previousTime = moment().subtract(1, 'minute').format("HH:mm");

        cy.wrap(actualTime).should('be.oneOf', [expectedTime, previousTime]);
    }

    public static getHourWithAddedMinutes(minutesToAdd: number): string {
        // Get the current time rounded to the nearest minute
        // const currentTime = moment();
        //
        // const updatedTime = currentTime.add(minutesToAdd, 'minutes');
        // return updatedTime.startOf('minute').format("HH:mm");

        return dayjs().add(minutesToAdd, 'minutes').format("HH:mm");
    }

    public static getCurrentHour(): string {
        const currentTime = moment();
        return currentTime.format("HH");
    }

    public static getCurrentPlusGivenHour(hours: number): string {
        const currentTime = moment().add(hours, 'hours')
        return currentTime.format("HH:00");
    }

    public static getCurrentYear(): string {
        const currentTime = moment();
        return currentTime.format("YYYY");
    }

    public static getCurrentMonth(): string {
        moment.locale('pl')
        const currentTime = moment();
        return currentTime.format("MMMM");
    }

    public static getCurrentDatePlusDaysNoDots(days: number): string {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + days);
        return moment(currentDate).format("DDMMYYYY");
    }

    public static getCurrentDateMinusDaysNoDots(days: number): string {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - days);
        return moment(currentDate).format("DDMMYYYY");
    }

    //
    public static getCurrentMomentWithinSecondMinusDays(days: number): string {
        const currentDate = moment().subtract(days, 'days');
        return currentDate.format("DD.MM.YYYY HH:mm");
    }

    public static getCurrentMomentWithinSecond(): string {
        const currentDate = moment();
        const newDate = currentDate
        return newDate.format("DD.MM.YYYY HH:mm");
    }

    public static getFirstDayOfPreviousMonth(): string {
        const firstDayOfPreviousMonth = moment().subtract(1, 'months').startOf('month');
        return firstDayOfPreviousMonth.format("DD.MM.YYYY 00:00");
    }

    public static getLastDayOfPreviousMonth(): string {
        const lastDayOfPreviousMonth = moment().subtract(1, 'months').endOf('month');
        return lastDayOfPreviousMonth.format("DD.MM.YYYY 23:59");
    }

    public static getCurrentMomentWithinSecondMinusMinutes(minutes: number): string {
        const currentDate = moment().subtract(minutes, 'minutes');
        const newDate = currentDate
        return newDate.format("DD.MM.YYYY HH:mm");
    }

    public static getCurrentMomentWithinSecondPlusMinutes(minutes: number): string {
        const currentDate = moment().add(minutes, 'minutes');
        const newDate = currentDate
        return newDate.format("DD.MM.YYYY HH:mm");
    }

    public static getCurrentDateMinusDaysMinusMinutes(minusDays: number, minutes: number): string {
        let currentDate = moment().subtract(minusDays, 'days').subtract(minutes, 'minutes');
        const newDate = currentDate.format("DD.MM.YYYY HH:mm");
        return newDate;
    }

    public static getCurrentDateMinusDays(minusDays: number): string {
        let currentDate = moment().subtract(minusDays, 'days')
        const newDate = currentDate.format("DD.MM.YYYY HH");
        return newDate;
    }

    public static getCurrentDateByGivenFormat(): string {
        let currentDate = moment()
        const newDate = currentDate.format("DD.MM.YYYY HH:mm");
        return newDate;
    }

    public static verifyDateInThreeMinuteDeviation(startDate: string, endDate: string): boolean {
        const startDateMoment = moment(startDate, 'DD.MM.YYYY HH:mm');
        const endDateMoment = moment(endDate, 'DD.MM.YYYY HH:mm');
        const currentTime = moment();
        const currentTimePlus3Minutes = currentTime.clone().add(3, 'minutes');
        const currentTimeMinus3Minutes = currentTime.clone().subtract(3, 'minutes');

        return startDateMoment.isBetween(currentTimeMinus3Minutes, currentTimePlus3Minutes) &&
            endDateMoment.isBetween(currentTimeMinus3Minutes, currentTimePlus3Minutes);
    }

    public static getCurrentDateWithMinutes(): string {
        const currentDate = moment();
        const newDate = currentDate
        return newDate.format("DD.MM.YYYY HH");
    }


    public static getCurrentDateMinusDaysPlusMinutes(minusDays: number, minutes: number): string {
        let currentDate = moment().subtract(minusDays, 'days').add(minutes, 'minutes');
        const newDate = currentDate.format("DD.MM.YYYY HH:mm");
        return newDate;
    }

    public static getNextDayNumber(): number {
        const today = moment();
        const nextDay = today.add(2, 'day');
        return nextDay.date();
    }

    public static getNextGivenDayNumber(days: number): number {
        const today = moment();
        const nextDay = today.add(days, 'day');
        return nextDay.date();
    }

    public static getFirstThreeLettersOfNextDay(): string {
        const today = moment();
        const nextDay = today.add(1, 'day');
        const nextDayName = nextDay.format('dddd');
        return nextDayName.charAt(0).toUpperCase() + nextDayName.slice(1).toLowerCase();
    }

    public static getStartOfTodayUTC(): string {
        return moment.utc().startOf('day').toISOString();
    }

    public static getStartOfPreviousDays(days: number) {
        return moment.tz('Europe/Warsaw')
            .subtract(days, 'days')
            .startOf('day')
            .toISOString();
    }

    public static getTodayInPolishFormat(): string {
        return moment.tz('Europe/Warsaw')
            .locale('pl')
            .format('dddd D MMMM YYYY');
    }

    public static getEndOfTodayUTC(): string {
        return moment.utc().endOf('day').toISOString();
    }

    //
    public static getStartOfTomorrowUTC(): string {
        const date = this.getCurrentDateFormatted()
        return  moment.utc().tz('Europe/Warsaw').add(1, 'days').startOf('day').toISOString();
    }

    public static getEndOfTomorrowUTC(): string {
        return moment.utc().tz('Europe/Warsaw').add(1, 'days').endOf('day').toISOString();
    }

    public static formatDateDaysAhead(daysAhead: number): string {
        const months: string[] = ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"];

        const today: Date = new Date();

        const futureDate: Date = new Date(today);
        futureDate.setDate(today.getDate() + daysAhead);

        const day: number = futureDate.getDate();
        const monthName: string = months[futureDate.getMonth()];
        const year: number = futureDate.getFullYear();

        return `${day} ${monthName} ${year}`;
    }
}