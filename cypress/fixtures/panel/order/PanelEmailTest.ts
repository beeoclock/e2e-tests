import {TestCaseEnum} from "../../enum/TestCaseEnum";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {SpecialistNameEnum} from "../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {ServiceNameEnum} from "../../../support/beeoclock/page-element/common/enum/ServiceNameEnum";
import {
    CalendarTableTimeEnum
} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";
import {
    PaymentOptionEnum
} from "../../../support/beeoclock/page-element/configuration/right-panel/oder-form/summary-and-peyment/enum/PaymentOptionEnum";

export class PanelEmailTest {
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
                        PaymentFlag: true,
                        requestedPayment: 'pending',
                        PaymentStatus: 'Nieopłacone'
                    },
                    summaryTime: '30min',
                    dataAssert: Data + ', 18:00',
                    publicNote: 'usuń mnie',
                    businessNote: 'USUŃ MNIE - wartość do wyszukania na ekranie usług',
                    assertTime: 'Anonimowy Strzyżenie Brody 18:00-18:30',

                };
        }
    }
}