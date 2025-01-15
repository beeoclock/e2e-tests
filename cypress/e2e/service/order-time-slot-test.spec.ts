import {ServiceEnum} from "../../support/beeoclock/common/enum/ServiceEnum";
import {ServicesPages} from "../../support/beeoclock/page-element/services/ServicesPages";
import {ServiceNameEnum} from "../../support/beeoclock/page-element/common/enum/ServiceNameEnum";
import {SpecialistNameEnum} from "../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {TimeEnum} from "../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/TimeEnum";

describe('order time slot test', () => {

    it('test 1 should test slot full time range', () => {
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

    it('test 2', () => {
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

    it('test 3', () => {
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
});