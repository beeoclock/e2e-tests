import {SpecialistNameEnum} from "../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {CalendarTableTimeEnum} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";
import {ServiceNameEnum} from "../../../support/beeoclock/page-element/common/enum/ServiceNameEnum";
import {TestCaseEnum} from "../../enum/TestCaseEnum";
import {PaymentOptionEnum} from "../../../support/beeoclock/page-element/configuration/right-panel/oder-form/summary-and-peyment/enum/PaymentOptionEnum";


export class PanelOrderCreationDataProvider {
    static getTestData(caseEnum: TestCaseEnum) {
        let Data: string = DateUtils.getCurrentDateWithGivenFormat("D.MM.YYYY")

        switch (caseEnum) {
            case TestCaseEnum.CASE_1:
                return {
                    specialist: SpecialistNameEnum.ZALEWSKI,
                    service: ServiceNameEnum.BREAD_TRIM,
                    serviceDescription: ServiceNameEnum.BREAD_TRIM_DESCRIPTION,
                    specialistLastName: SpecialistNameEnum.ZALEWSKI_LAST_NAME,
                    specialistFirstName: SpecialistNameEnum.ZALEWSKI_FIRST_NAME,
                    time: CalendarTableTimeEnum.Hour_18,
                    hour: null,
                    minute: '30',
                    duration: '15min',
                    nextDuration: '30min',
                    price: '30',
                    priceAssert: '40,00 zł',
                    updatedPrice: '40',
                    summary: ServiceNameEnum.BREAD_TRIM + "\nPL\n⏰ " + Data + ", 18:00\n⏳" + " 30min " + SpecialistNameEnum.ZALEWSKI_FIRST_NAME + "\n" + "40,00 zł" + "\n👤 Anonimowy",
                    paymentMethod: PaymentOptionEnum.CARD,
                    payment: {
                        PaymentStatus: true,
                        requestedPayment: 'pending',
                    },
                    summaryTime: '30min',
                    dataAssert: Data + ', 18:00',
                    publicNote: 'usuń mnie',
                    businessNote: 'USUŃ MNIE - wartość do wyszukania na ekranie usług',
                    assertTime: '18:00 - 18:30    Strzyżenie Brody',

                };
            case TestCaseEnum.CASE_2:
                return {
                    specialist: SpecialistNameEnum.ZALEWSKI,
                    service: ServiceNameEnum.E2E_HAIRCUT.toLowerCase(),
                    serviceDescription: ServiceNameEnum.E2E_HAIRCUT_DESCRIPTION,
                    specialistLastName: SpecialistNameEnum.ZALEWSKI_LAST_NAME,
                    specialistFirstName: SpecialistNameEnum.ZALEWSKI_FIRST_NAME,
                    time: CalendarTableTimeEnum.Hour_07,
                    hour: null,
                    minute: '2',
                    duration: '30min',
                    price: '40',
                    priceAssert: '50,00 zł',
                    updatedPrice: '50',
                    summary: ServiceNameEnum.E2E_HAIRCUT.toLowerCase() + "\nPL\n⏰ " + Data + ", 07:00\n ⏳ 2min Tomasz 50,00 zł 👤 Anonimowy",
                    paymentMethod: PaymentOptionEnum.CASH,
                    payment: {
                        PaymentStatus: true,
                        requestedPayment: 'pending',
                    },
                    dataAssert: Data + '07:00',
                    summaryTime: '2min',
                    publicNote: 'test note',
                    businessNote: 'TEST - do usunięcia',
                    assertTime: '07:00-07:02 e2e-strzyżenie'
                };
            case TestCaseEnum.CASE_3:
                return {
                    specialist: SpecialistNameEnum.E2E_E2E,
                    service: ServiceNameEnum.BREAD_TRIM,
                    serviceDescription: ServiceNameEnum.BREAD_TRIM_DESCRIPTION,
                    specialistLastName: SpecialistNameEnum.E2E_SINGLE_NAME,
                    specialistFirstName: SpecialistNameEnum.E2E_SINGLE_NAME,
                    time: CalendarTableTimeEnum.Hour_12,
                    hour: null,
                    minute: null,
                    duration: '15min',
                    price: '30',
                    updatedPrice: '150 zł',
                    summary: ServiceNameEnum.BREAD_TRIM + "\nPL\n⏰ " + Data + ", 12:00\n⏳" + " 15min " + "e2e 150,00 zł 👤 Anonimowy",
                    paymentMethod: PaymentOptionEnum.CARD,
                    payment: {
                        PaymentStatus: false,
                        requestedPayment: 'succeeded',
                    },
                    dataAssert: Data + '12:00',
                    summaryTime: '15min',
                    publicNote: 'sample note AAAAAAAAAAAA',
                    businessNote: 'SAMPLE - do usunięcia',
                    assertTime: '12:00 - 12:15   Strzyżenie Brody'
                };
            case TestCaseEnum.CASE_4:
                return {
                    specialist: SpecialistNameEnum.E2E_E2E,
                    service: ServiceNameEnum.E2E_HAIRCUT.toLowerCase(),
                    serviceDescription: ServiceNameEnum.E2E_HAIRCUT_DESCRIPTION,
                    specialistLastName: SpecialistNameEnum.E2E_SINGLE_NAME,
                    specialistFirstName: SpecialistNameEnum.E2E_SINGLE_NAME,
                    time: CalendarTableTimeEnum.Hour_15,
                    hour: '2',
                    minute: '2',
                    duration: '30min',
                    price: '40',
                    priceAssert: '475,00 zł',
                    updatedPrice: '475',
                    summary: ServiceNameEnum.E2E_HAIRCUT.toLowerCase() + " PL ⏰ " + Data + ", 15:00 ⏳ 2g, 2min e2e 475,00 zł 👤 Anonimowy",
                    paymentMethod: PaymentOptionEnum.CASH,
                    payment: {
                        PaymentStatus: false,
                        requestedPayment: 'succeeded',
                    },
                    summaryTime: ' 2g, 2min',
                    dataAssert: Data + ', 15:00',
                    publicNote: 'coloring note',
                    businessNote: 'COLORING - do usunięcia',
                    assertTime: '15:00 - 17:02    e2e-strzyżenie'
                };
            default:
                throw new Error("Invalid test case");
        }
    }
}
