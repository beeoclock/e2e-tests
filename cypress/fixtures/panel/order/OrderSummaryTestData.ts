import {TestCaseEnum} from "../../enum/TestCaseEnum";
import {ServiceNameEnum} from "../../../support/beeoclock/page-element/common/enum/ServiceNameEnum";

export class OrderSummaryTestData {
    public static getPlusTestData(caseEnum: TestCaseEnum) {
        switch (caseEnum) {
            case TestCaseEnum.CASE_1:
                return {
                    case: TestCaseEnum.CASE_1,
                    amount: '1',
                    service: ServiceNameEnum.BREAD_TRIM,
                    duration: '15min',
                    price: '30',
                };
            case TestCaseEnum.CASE_2:
                return {
                    case: TestCaseEnum.CASE_2,
                    amount: '2',
                    service: ServiceNameEnum.BREAD_TRIM,
                    duration: '30min',
                    price: '60',
                };
            case TestCaseEnum.CASE_3:
                return {
                    case: TestCaseEnum.CASE_4,
                    amount: '3',
                    service: ServiceNameEnum.E2E_HAIRCUT.toLowerCase(),
                    duration: '1g',
                    price: '100',
                };
            case TestCaseEnum.CASE_4:
                return {
                    case: TestCaseEnum.CASE_4,
                    amount: '4',
                    service: ServiceNameEnum.HAIR_DYEING,
                    duration: '2g',
                    price: '280',
                };
            default:
                throw new Error("Invalid test case");
        }
    }

    public static getMinusTestData(caseEnum: TestCaseEnum) {
        switch (caseEnum) {
            case TestCaseEnum.CASE_1:
                return {
                    case: TestCaseEnum.CASE_1 + ' minus',
                    amount: '3',
                    service: ServiceNameEnum.BREAD_TRIM,
                    duration: '1g, 45min',
                    price: '250',
                };
            case TestCaseEnum.CASE_2:
                return {
                    case: TestCaseEnum.CASE_2 + ' minus',
                    amount: '2',
                    service: ServiceNameEnum.E2E_HAIRCUT.toLowerCase(),
                    duration: '1g, 15min',
                    price: '210',
                };
            case TestCaseEnum.CASE_3:
                return {
                    case: TestCaseEnum.CASE_3 + ' minus',
                    amount: '1',
                    service: ServiceNameEnum.BREAD_TRIM,
                    duration: '1g',
                    price: '180',
                };
            case TestCaseEnum.CASE_4:
                return {
                    case: TestCaseEnum.CASE_3 + ' minus',
                    amount: '0',
                    service: ServiceNameEnum.HAIR_DYEING,
                    duration: '0sek',
                    price: '0',
                };

            default:
                throw new Error("Invalid test case");
        }
    }
}