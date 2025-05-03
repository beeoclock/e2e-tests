import {ServiceEnum} from "../../../support/ServiceEnum";
import {ServicesPages} from "../../../support/beeoclock/page-element/services/ServicesPages";
import {ServiceNameEnum} from "../../../support/beeoclock/page-element/common/enum/ServiceNameEnum";
import {SpecialistNameEnum} from "../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {TimeEnum} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/TimeEnum";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";
import {AbsenceApi} from "../../../support/beeoclock/backend/panel/absence/AbsenceApi";

describe('order time slot test', () => {
    let currentHour: string = DateUtils.getCurrentHourWithMinutes()

    before('clean orders & absences', () => {
        OrderApi.deleteAllCurrentOrders()
        AbsenceApi.deleteAllAbsences()
    })

    it('test 1 - check last free slot visibility for 30 min service last service is on 20:30', (): void => {
        ServicesPages.BookingSelectServicePage
            .verifyCorrectForm()

        ServicesPages.BookingSelectServicePage
            .selectSpecificOrder(ServiceNameEnum.E2E_HAIRCUT.toLowerCase())
            .clickSelectSpecialistAndOrder()
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20_30)

        cy.log('NEXT day')
        ServicesPages.SelectDayPage
            .selectGivenNextDay(1)
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20_30)

        cy.log('two days later')
        ServicesPages.SelectDayPage
            .selectGivenNextDay(2)
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20_30)
            .clickBackByButton()
    })

    it('test 2 - check last free slot visibility for 1h service last service is on 20:30', (): void => {
        //TODO: discuss with dev (when the time is 15:28 the first slot is 15:30 ..-> 19:30 so test will fail
        ServicesPages.BookingSelectServicePage
            .selectSpecificOrder(ServiceNameEnum.HAIR_DYEING)
            .clickSelectSpecialistAndOrder()
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20)

        //INFO: this will be always pass cause next day is always 20:00
        cy.log('NEXT 1')
        ServicesPages.SelectDayPage
            .selectGivenNextDay(1)
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20)

        cy.log('NEXT 2')
        ServicesPages.SelectDayPage
            .selectGivenNextDay(2)
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20)
            .clickBackByButton()
    })

    it('test 3 - check last free slot visibility for 15m service last service is on 20:45', (): void => {
        ServicesPages.BookingSelectServicePage
            .selectSpecificOrder(ServiceNameEnum.BREAD_TRIM)
            .clickSelectSpecialistAndOrder()
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20_30)
            .assertSpecificTime('20:45')

        cy.log('NEXT 1')
        ServicesPages.SelectDayPage
            .selectGivenNextDay(1)
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20_30)
            .assertSpecificTime('20:45')

        cy.log('NEXT 2')
        ServicesPages.SelectDayPage
            .selectGivenNextDay(2)
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20_30)
            .assertSpecificTime('20:45')
            .clickBackByButton()
    });

    it('test 4 - check that there is no current hour slot', (): void => {
        ServicesPages.BookingSelectServicePage
            .selectSpecificOrder(ServiceNameEnum.HAIR_DYEING)
            .clickSelectSpecialistAndOrder()
        ServicesPages.SelectTimePage
            .verifyGivenSlotByActualTime(currentHour)

        if (currentHour <= '20:00') {
            ServicesPages.SelectTimePage
                .assertSpecificTime(assertFirstFreeSlotForHairDyeing())
        } else {
            cy.log('no free slot')
        }
    });

    beforeEach('login', (): void => {
        cy.visit(ServiceEnum.PUBLIC_PANEL)
    })

    function assertFirstFreeSlotForHairDyeing(): string {
        // 1h duration
        let time: number = parseInt(DateUtils.getCurrentHour(), 10);

        return time < 12 ? "12" : `${time + 1}:00`;
    }

    function assertFirstFreeSlotForBreadTrim(): string {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();

        // All available slot minutes
        const slotMinutes = [0, 15, 30, 45];

        // Find the next slot after current time
        let nextSlotMinute = slotMinutes.find(min => min > minute);
        let nextSlotHour = hour;

        if (nextSlotMinute === undefined) {
            // If no slot minutes left this hour, go to next hour
            nextSlotMinute = 0;
            nextSlotHour++;
        }

        // If next slot would be after 20:45 (inclusive), return nothing
        if (nextSlotHour > 20 || (nextSlotHour === 20 && nextSlotMinute > 45)) {
            return '';
        }

        const paddedHour = nextSlotHour.toString().padStart(2, '0');
        const paddedMinute = nextSlotMinute.toString().padStart(2, '0');
        return `${paddedHour}:${paddedMinute}`;
    }

});