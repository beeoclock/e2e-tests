import {TestCaseEnum} from "../../enum/TestCaseEnum";
import {ServiceNameEnum} from "../../../support/beeoclock/page-element/common/enum/ServiceNameEnum";

export class OrderSummaryTestData {
    static getTestData(caseEnum: TestCaseEnum) {

        switch (caseEnum) {
            case TestCaseEnum.CASE_1:
                return {
                    case: TestCaseEnum.CASE_1,
                    service: ServiceNameEnum.BREAD_TRIM,
                    duration: '15min',
                    price: '30',
                };
            case TestCaseEnum.CASE_2:
                return {
                    case: TestCaseEnum.CASE_2,
                    service: ServiceNameEnum.BREAD_TRIM,
                    duration: '15min',
                    price: '30',
                };
            default:
                throw new Error("Invalid test case");
        }
    }
}