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

    it('test 2 - check last free slot visibility for 1h service last service is on 20:00', (): void => {
        // //TODO: discuss with dev (when the time is 15:28 the first slot is 15:30 ..-> 19:30 so test will fail
        ServicesPages.BookingSelectServicePage
            .selectSpecificOrder(ServiceNameEnum.HAIR_DYEING)
            .clickSelectSpecialistAndOrder()

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

        const expectedSlots: string[] = assertFirstFreeSlotForHairDyeing();

        expectedSlots.forEach(slot => {
            ServicesPages.SelectTimePage.assertSpecificTime(slot);
        });
    });

    it('test 5 - check all slot visibility in the next days for 1h service', (): void => {
        ServicesPages.BookingSelectServicePage
            .selectSpecificOrder(ServiceNameEnum.HAIR_DYEING)
            .clickSelectSpecialistAndOrder()
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectDayPage
            .selectGivenNextDay(2)

        ServicesPages.SelectTimePage.verifyGivenSlotByActualTime(currentHour);

        expectedHairDyeingHours.forEach((hour: TimeEnum): void => {
            ServicesPages.SelectTimePage.assertSpecificTime(hour);
        });

        ServicesPages.SelectTimePage.verifySlotLength(expectedHairDyeingHours.length);
    })

    //it's stabilized because we assert date in next two days, so current hour is not important
    it('test 6 - check all slot visibility in the next days for 30m service', (): void => {
        ServicesPages.BookingSelectServicePage
            .selectSpecificOrder(ServiceNameEnum.E2E_HAIRCUT.toLowerCase())
            .clickSelectSpecialistAndOrder()
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectDayPage
            .selectGivenNextDay(2)

        ServicesPages.SelectTimePage.verifyGivenSlotByActualTime(currentHour);

        expectedHaircutHours.forEach((hour: TimeEnum): void => {
            ServicesPages.SelectTimePage.assertSpecificTime(hour);
        });

        ServicesPages.SelectTimePage.verifySlotLength(expectedHaircutHours.length);
    })

    //it's stabilized because we assert date in next two days, so current hour is not important
    it('test 7 - check all slot visibility in the next days for 15m service', (): void => {
        ServicesPages.BookingSelectServicePage
            .selectSpecificOrder(ServiceNameEnum.BREAD_TRIM)
            .clickSelectSpecialistAndOrder()
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectDayPage
            .selectGivenNextDay(2)

        ServicesPages.SelectTimePage.verifyGivenSlotByActualTime(currentHour);

        expectedE2EBreadTrimHours.forEach((hour: TimeEnum): void => {
            ServicesPages.SelectTimePage.assertSpecificTime(hour);
        });

        ServicesPages.SelectTimePage.verifySlotLength(expectedE2EBreadTrimHours.length);
    })

    beforeEach('login', (): void => {
        cy.visit(ServiceEnum.PUBLIC_PANEL_DEV)
    })

    function assertFirstFreeSlotForHairDyeing(): string[] {
        const now = new Date();
        let hour: number = now.getHours();
        const minute: number = now.getMinutes();

        if (minute > 0) {
            hour += 1;
        }

        const result: string[] = [];

        for (let h = hour; h <= 20; h++) {
            if (h >= 0 && h <= 20) {
                result.push(`${h.toString().padStart(2, '0')}:00`);
            }
        }
        return result;
    }

    const expectedHairDyeingHours: TimeEnum[] = [
        TimeEnum.Hour_12,
        TimeEnum.Hour_13,
        TimeEnum.Hour_14,
        TimeEnum.Hour_15,
        TimeEnum.Hour_16,
        TimeEnum.Hour_17,
        TimeEnum.Hour_18,
        TimeEnum.Hour_19,
        TimeEnum.Hour_20,
    ];

    const expectedHaircutHours: TimeEnum[] = [
        TimeEnum.Hour_12,
        TimeEnum.Hour_12_30,
        TimeEnum.Hour_13,
        TimeEnum.Hour_13_30,
        TimeEnum.Hour_14,
        TimeEnum.Hour_14_30,
        TimeEnum.Hour_15,
        TimeEnum.Hour_15_30,
        TimeEnum.Hour_16,
        TimeEnum.Hour_16_30,
        TimeEnum.Hour_17,
        TimeEnum.Hour_17_30,
        TimeEnum.Hour_18,
        TimeEnum.Hour_18_30,
        TimeEnum.Hour_19,
        TimeEnum.Hour_19_30,
        TimeEnum.Hour_20,
        TimeEnum.Hour_20_30,
    ];

    const expectedE2EBreadTrimHours: (TimeEnum | string)[] = [
        TimeEnum.Hour_12,
        '12:15',
        TimeEnum.Hour_12_30,
        '12:45',
        TimeEnum.Hour_13,
        '13:15',
        TimeEnum.Hour_13_30,
        '13:45',
        TimeEnum.Hour_14,
        '14:15',
        TimeEnum.Hour_14_30,
        '14:45',
        TimeEnum.Hour_15,
        '15:15',
        TimeEnum.Hour_15_30,
        '15:45',
        TimeEnum.Hour_16,
        '16:15',
        TimeEnum.Hour_16_30,
        '16:45',
        TimeEnum.Hour_17,
        '17:15',
        TimeEnum.Hour_17_30,
        '17:45',
        TimeEnum.Hour_18,
        '18:15',
        TimeEnum.Hour_18_30,
        '18:45',
        TimeEnum.Hour_19,
        '19:15',
        TimeEnum.Hour_19_30,
        '19:45',
        TimeEnum.Hour_20,
        '20:15',
        TimeEnum.Hour_20_30,
        '20:45',
    ];
});