import {ServiceEnum} from "../../../support/ServiceEnum";
import {ServicesPages} from "../../../support/beeoclock/page-element/services/ServicesPages";
import {ServiceNameEnum} from "../../../support/beeoclock/page-element/common/enum/ServiceNameEnum";
import {SpecialistNameEnum} from "../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {TimeEnum} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/TimeEnum";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";
import {AbsenceApi} from "../../../support/beeoclock/backend/panel/absence/AbsenceApi";

describe('order time slot test', () => {
    let currentHour = DateUtils.getCurrentHourWithMinutes()

    before('clean orders & absences', () => {
        OrderApi.deleteAllCurrentOrders()
        AbsenceApi.deleteAllAbsences()
    })

    it  ('test 1 should test free slot visibility', () => {
        cy.visit(ServiceEnum.PUBLIC_PANEL)
        ServicesPages.BookingSelectServicePage
            .verifyCorrectForm()

        ServicesPages.BookingSelectServicePage
            .selectSpecificOrder(ServiceNameEnum.E2E_HAIRCUT.toLowerCase())
            .clickSelectSpecialistAndOrder()
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20_30)

        cy.log('NEXT 1')
        ServicesPages.SelectDayPage
            .selectGivenNextDay(1)
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20_30)

        cy.log('NEXT 2')
        ServicesPages.SelectDayPage
            .selectGivenNextDay(2)
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20_30)
            .clickBackByButton()
    })

    it('test 2 should test free slot visibility', () => {
        cy.visit(ServiceEnum.PUBLIC_PANEL)

        ServicesPages.BookingSelectServicePage
            .selectSpecificOrder(ServiceNameEnum.HAIR_DYEING)
            .clickSelectSpecialistAndOrder()
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20)

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

    it('test 3 should test free slot visibility', () => {
        cy.visit(ServiceEnum.PUBLIC_PANEL)

        ServicesPages.BookingSelectServicePage
            .selectSpecificOrder(ServiceNameEnum.BREAD_TRIM)
            .clickSelectSpecialistAndOrder()
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20_30)

        cy.log('NEXT 1')
        ServicesPages.SelectDayPage
            .selectGivenNextDay(1)
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20_30)

        cy.log('NEXT 2')
        ServicesPages.SelectDayPage
            .selectGivenNextDay(2)
        ServicesPages.SelectSpecialistPage
            .selectSpecificSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
        ServicesPages.SelectTimePage
            .assertSpecificTime(TimeEnum.Hour_20_30)
            .clickBackByButton()
    });

    it('test 4 should test free slot visibility', () => {
        cy.visit(ServiceEnum.PUBLIC_PANEL)

        ServicesPages.BookingSelectServicePage
            .selectSpecificOrder(ServiceNameEnum.HAIR_DYEING)
            .clickSelectSpecialistAndOrder()
        ServicesPages.SelectTimePage
            .verifyGivenSlotNotExist(currentHour)
            assertFirstFreeSlot()
    });


    function assertFirstFreeSlot(): string {
        let time: number = parseInt(DateUtils.getCurrentHour(), 10);

        return time < 12 ? "12" : `${time + 1}:00`;
    }
});