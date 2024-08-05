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
import {data} from "cypress/types/jquery";


export class PanelOrderCreationDataProvider {
    static getTestData(caseEnum: TestCaseEnum) {
        let Data: string = DateUtils.getCurrentDateWithGivenFormat("YYYY-MM-DD")

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
                    duration: '30 min',
                    price: '40',
                    summary: ServiceNameEnum.BREAD_TRIM + "\nPL\n⏰ " + Data + "   18:00\n⏳" +  " 30 min" + "\nT\nZ\n" + SpecialistNameEnum.ZALEWSKI_FIRST_NAME + "\n" + "40,00 zł" + "\n👤 Anonimowy",
                    paymentMethod: PaymentOptionEnum.CARD,
                    PaymentStatus: PaymentStatusEnum.IN_PROGRESS,
                    dataAssert: Data + '18:00',
                    publicNote: 'usuń mnie',
                    businessNote: 'USUŃ MNIE - wartość do wyszukania na ekranie usług',
                    assertTime: '18:00 - 18:30    Strzyżenie Brody'
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
                    price: '50',
                    summary:  ServiceNameEnum.E2E_HAIRCUT.toLowerCase() + "\nPL\n⏰ " + Data + " 07:00\n ⏳ 2 min T Z Tomasz 50,00 zł 👤 Anonimowy",
                    paymentMethod: PaymentOptionEnum.CASH,
                    PaymentStatus: PaymentStatusEnum.SUCCESS,
                    dataAssert: Data + '07:00',
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
                    price: '150',
                    summary: ServiceNameEnum.BREAD_TRIM + "\nPL\n⏰ " + Data + "   12:00\n⏳" +  " 15 min" + " e e e2e 150,00 zł 👤 Anonimowy",
                    paymentMethod: PaymentOptionEnum.CARD,
                    PaymentStatus: PaymentStatusEnum.REJECTION,
                    dataAssert: Data + '12:00',
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
                    price: '475',
                    summary: ServiceNameEnum.E2E_HAIRCUT.toLowerCase() + " PL ⏰ 2024-08-05 15:00 ⏳ 2 godz, 2 min e e e2e 475,00 zł 👤 Anonimowy",
                    paymentMethod: PaymentOptionEnum.CASH,
                    PaymentStatus: PaymentStatusEnum.REGISTERED,
                    dataAssert: Data + '15:00',
                    publicNote: 'coloring note',
                    businessNote: 'COLORING - do usunięcia',
                    assertTime: '15:00 - 17:02    e2e-strzyżenie'
                };
            default:
                throw new Error("Invalid test case");
        }
    }
}
