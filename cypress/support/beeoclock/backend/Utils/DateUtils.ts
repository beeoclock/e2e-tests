import { data } from "cypress/types/jquery";
import * as moment from "moment";

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

    public static getCurrentTimeFormatted(): string {
        return moment().toISOString();
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
        return moment(currentDate).toISOString();
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

    public static getCurrentDate(): string {
        const currentDate = moment();
        const newDate = currentDate
        return newDate.format("DD.MM.YYYY");
    }

    public static getCurrentHourFormatted(): string {
        const currentTime = moment();
        return currentTime.format("HH_mm");
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

    public static getFirstThreeLettersOfNextDay(): string {
        const today = moment();
        const nextDay = today.add(1, 'day');
        const nextDayName = nextDay.format('dddd');
        return nextDayName.charAt(0).toUpperCase() + nextDayName.slice(1).toLowerCase();
    }

}