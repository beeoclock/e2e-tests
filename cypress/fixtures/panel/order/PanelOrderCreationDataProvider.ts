import {SpecialistNameEnum} from "../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {
    CalendarTableTimeEnum
} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";
import {ServiceNameEnum} from "../../../support/beeoclock/page-element/common/enum/ServiceNameEnum";
import {TestCaseEnum} from "../../enum/TestCaseEnum";
import {
    PaymentStatusEnum
} from "../../../support/beeoclock/page-element/configuration/right-panel/oder-form/summary-and-peyment/enum/PaymentStatusEnum";
import {
    PaymentOptionEnum
} from "../../../support/beeoclock/page-element/configuration/right-panel/oder-form/summary-and-peyment/enum/PaymentOptionEnum";


export class PanelOrderCreationDataProvider {
    static getTestData(caseEnum) {
        let nextDayData = DateUtils.getCurrentDateWithGivenFormat("YYYY-MM-DD")
        const timeString = DateUtils.getCurrentTimePlusOneHourFormatted()
        const datetimeInput = DateUtils.convertDateToDatetimeInput(nextDayData, timeString);
        let dataAssert = nextDayData + '18:00'

        switch (caseEnum) {
            case TestCaseEnum.CASE_1:
                return {
                    specialist: SpecialistNameEnum.ZALEWSKI,
                    service: ServiceNameEnum.BREAD_TRIM,
                    serviceDescription: ServiceNameEnum.BREAD_TRIM_DESCRIPTION,
                    specialistLastName: SpecialistNameEnum.ZALEWSKI_LAST_NAME,
                    specialistFirstName: SpecialistNameEnum.ZALEWSKI_FIRST_NAME,
                    time: CalendarTableTimeEnum.Hour_18,
                    duration: '1 godz, 30 min',
                    price: '40',
                    paymentMethod: PaymentOptionEnum.CARD,
                    PaymentStatus: PaymentStatusEnum.IN_PROGRESS,
                    dataAssert: nextDayData + '18:00',
                    publicNote: 'usuń mnie',
                    businessNote: 'USUŃ MNIE - wartość do wyszukania na ekranie usług',
                    assertTime: '18:00 - 19:30    Strzyżenie Brody   📓 usuń mnie'
                };
            case TestCaseEnum.CASE_2:
                return {
                    specialist: SpecialistNameEnum.ZALEWSKI,
                    service: ServiceNameEnum.E2E_HAIRCUT.toLowerCase(),
                    serviceDescription: ServiceNameEnum.E2E_HAIRCUT_DESCRIPTION,
                    specialistLastName: SpecialistNameEnum.ZALEWSKI_LAST_NAME,
                    specialistFirstName: SpecialistNameEnum.ZALEWSKI_FIRST_NAME,
                    time: CalendarTableTimeEnum.Hour_07,
                    duration: '1 godz',
                    price: '50',
                    paymentMethod: PaymentOptionEnum.CASH,
                    PaymentStatus: PaymentStatusEnum.SUCCESS,
                    dataAssert: nextDayData + '07:00',
                    publicNote: 'test note',
                    businessNote: 'TEST - do usunięcia',
                    assertTime: '07:00-08:00 e2e-strzyżenie 💰testnote'
                };
            // case TestCaseEnum.CASE_3:
            //     return {
            //         specialist: SpecialistNameEnum.E2E_E2E,
            //         service: ServiceNameEnum.BREAD_TRIM,
            //         time: CalendarTableTimeEnum.Hour_12,
            //         duration: '30 min',
            //         price: '20',
            //         publicNote: 'sample note',
            //         businessNote: 'SAMPLE - do usunięcia',
            //         assertTime: '12:00 - 12:30    Golenie   📓 sample note'
            //     };
            // case TestCaseEnum.CASE_4:
            //     return {
            //         specialist: SpecialistNameEnum.E2E_E2E,
            //         service: ServiceNameEnum.E2E_HAIRCUT,
            //         time: CalendarTableTimeEnum.Hour_15,
            //         duration: '2 godz',
            //         price: '100',
            //         publicNote: 'coloring note',
            //         businessNote: 'COLORING - do usunięcia',
            //         assertTime: '15:00 - 17:00    Koloryzacja   📓 coloring note'
            //     };
            default:
                throw new Error("Invalid test case");
        }
    }
}
