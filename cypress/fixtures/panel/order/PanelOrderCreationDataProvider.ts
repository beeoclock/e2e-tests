import {SpecialistNameEnum} from "../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {CalendarTableTimeEnum} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";
import {ServiceNameEnum} from "../../../support/beeoclock/page-element/common/enum/ServiceNameEnum";
import {TestCaseEnum} from "../../enum/TestCaseEnum";
import {PaymentOptionEnum} from "../../../support/beeoclock/page-element/configuration/right-panel/oder-form/summary-and-peyment/enum/PaymentOptionEnum";
import {OderStatusEnum} from "../../../support/beeoclock/page-element/common/enum/OderStatusEnum";

export class PanelOrderCreationDataProvider {
    static getTestData(caseEnum: TestCaseEnum) {
        const data: string = DateUtils.getCurrentDateWithGivenFormat("D.MM.YYYY")

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
                    // summary: ServiceNameEnum.BREAD_TRIM + `\nPL\n${OderStatusEnum.ACCEPTED}\n⏰ ${Data} 18:00\n⏳ 30min SpecialistNameEnum.ZALEWSKI_FIRST_NAME\n 40,00 zł\n👤 Anonimowy`,
                    summary: `${ServiceNameEnum.BREAD_TRIM} PL ${OderStatusEnum.ACCEPTED} ⏰ ${data}, 18:00 ⏳ 28min ${SpecialistNameEnum.ZALEWSKI_FIRST_NAME} 40,00 zł 👤 Anonimowy Dotknij danych, aby je edytować.`,
                    paymentMethod: PaymentOptionEnum.CARD,
                    payment: {
                        PaymentFlag: true,
                        requestedPayment: 'pending',
                        PaymentStatus: 'Nieopłacone'
                    },
                    summaryTime: '30min',
                    dataAssert: data + ', 18:00',
                    publicNote: 'usuń mnie',
                    businessNote: 'USUŃ MNIE - wartość do wyszukania na ekranie usług',
                    assertTime: 'Anonimowy Strzyżenie Brody 18:00-18:30',

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
                    summary: ServiceNameEnum.E2E_HAIRCUT.toLowerCase() + `\nPL\n${OderStatusEnum.ACCEPTED}\n⏰ ` + data + ", 07:00\n ⏳ 2min Tomasz 50,00 zł 👤 Anonimowy",
                    paymentMethod: PaymentOptionEnum.CASH,
                    payment: {
                        PaymentFlag: true,
                        requestedPayment: 'pending',
                        PaymentStatus: 'Nieopłacone'
                    },
                    dataAssert: data + ', 07:00',
                    summaryTime: '2min',
                    publicNote: 'test note',
                    businessNote: 'TEST - do usunięcia',
                    assertTime: 'Anonimowy e2e-strzyżenie 07:00-07:02 '
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
                    priceAssert: '150,00 zł',
                    summary: ServiceNameEnum.BREAD_TRIM + "\nPL\n⏰ " + data + ", 12:00\n⏳" + " 15min " + "e2e 150,00 zł 👤 Anonimowy",
                    paymentMethod: PaymentOptionEnum.CARD,
                    payment: {
                        PaymentFlag: false,
                        requestedPayment: 'succeeded',
                        PaymentStatus: 'Zapłacone'
                    },
                    dataAssert: data + ', 12:00',
                    summaryTime: '15min',
                    publicNote: 'sample note AAAAAAAAAAAA',
                    businessNote: 'SAMPLE - do usunięcia',
                    assertTime: 'AnonimowyStrzyżenie Brody12:00 - 12:15'
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
                    summary: ServiceNameEnum.E2E_HAIRCUT.toLowerCase() + " PL ⏰ " + data + ", 15:00 ⏳ 2g, 2min e2e 475,00 zł 👤 Anonimowy",
                    paymentMethod: PaymentOptionEnum.CASH,
                    payment: {
                        PaymentFlag: false,
                        requestedPayment: 'succeeded',
                        PaymentStatus: 'Zapłacone'
                    },
                    summaryTime: ' 2g, 2min',
                    dataAssert: data + ', 15:00',
                    publicNote: 'coloring note',
                    businessNote: 'COLORING - do usunięcia',
                    assertTime: 'Anonimowye2e-strzyżenie15:00 - 17:02'
                };
            default:
                throw new Error("Invalid test case");
        }
    }
}
