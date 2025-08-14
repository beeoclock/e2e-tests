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
import {faker} from "@faker-js/faker";

export class PanelOrderVariousOptionDataProvider {
    static getTestData(caseEnum: TestCaseEnum) {
        let Data: string = DateUtils.getCurrentDateWithGivenFormat("D.MM.YYYY");
        let nextDayData: string = DateUtils.getCurrentDatePlusGivenDay(1, "D.MM.YYYY")
        const controlNumber: string = faker.finance.pin(5);

        switch (caseEnum) {
            case TestCaseEnum.CASE_1:
                return {
                    controlNumber: controlNumber,
                    specialist: SpecialistNameEnum.ZALEWSKI,
                    service: ServiceNameEnum.E2E_HAIRCUT.toLowerCase(),
                    serviceDescription: ServiceNameEnum.E2E_HAIRCUT_DESCRIPTION,
                    specialistLastName: SpecialistNameEnum.ZALEWSKI_LAST_NAME,
                    specialistFirstName: SpecialistNameEnum.ZALEWSKI_FIRST_NAME,
                    time: CalendarTableTimeEnum.Hour_18,
                    duration: '30',
                    price: '40',
                    updatedPrice: '200',
                    firstName: 'Piotr',
                    lastName: 'Kowalczyk',
                    email: 'piotr.kowalczyk@beeoclock.com',
                    phone: '510-557-420',
                    summary: ServiceNameEnum.E2E_HAIRCUT.toLowerCase() + "\nPL\n⏰ " + Data + ", 18:00\n⏳" + " 30min " + SpecialistNameEnum.ZALEWSKI_FIRST_NAME + "\n" + '200,00 zł 👤 Piotr 🆕',
                    paymentMethod: PaymentOptionEnum.CARD,
                    PaymentStatus: PaymentStatusEnum.IN_PROGRESS,
                    dataAssert: Data + '18:00',
                    publicNote: 'usuń mnie',
                    businessNote: `USUŃ MNIE - notatka nr: ${controlNumber}`,
                    assertTime: '18:00 - 18:30  Piotr Kowalczyk' + ServiceNameEnum.E2E_HAIRCUT.toLowerCase(),
                    mailSubject: `Zarezerwowane Wydarzenie: ${ServiceNameEnum.E2E_HAIRCUT.toLowerCase()} w Haircut&Barber w ${DateUtils.getTodayInPolishFormat()} o 18:00 - Bee O\'clock`,
                    mailIntro: `WITAJ, PIOTR! ${ServiceNameEnum.E2E_HAIRCUT.toLowerCase()} zostało zarezerwowane w Haircut&Barber w ${DateUtils.getTodayInPolishFormat()} o 18:00`,

                    // next case
                    nextSpecialist: SpecialistNameEnum.E2E_E2E,
                    nextService: ServiceNameEnum.BREAD_TRIM,
                    nextServiceDescription: ServiceNameEnum.BREAD_TRIM_DESCRIPTION,
                    nextSpecialistLastName: SpecialistNameEnum.E2E_SINGLE_NAME.toLowerCase(),
                    nextDuration: '15',
                    nextPrice: '30',
                    nextPriceUpdated: '80',
                    newFirstName: 'Piotr',
                    newLastName: 'Kowalczyk',
                    nextSummary: ServiceNameEnum.BREAD_TRIM + "\nPL\n⏰ " + nextDayData + ",   18:00\n⏳" + " 15min " + SpecialistNameEnum.E2E_SINGLE_NAME + "\n" + '80,00 zł 👤 Piotr 📇',
                    nextPaymentMethod: PaymentOptionEnum.CASH,
                    nextPaymentStatus: PaymentStatusEnum.SUCCESS,
                    nextDataAssert: nextDayData + '18:00',
                    nextAssertTime: '18:00 - 18:15  Piotr Kowalczyk' + ServiceNameEnum.BREAD_TRIM
                };
            default:
                throw new Error("Invalid test case");
        }
    }
}
