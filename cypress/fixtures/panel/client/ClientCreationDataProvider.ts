import {faker} from "@faker-js/faker";
import {TestCaseEnum} from "../../enum/TestCaseEnum";

export class ClientCreationDataProvider {
    static getTestData(caseEnum: TestCaseEnum) {

        switch (caseEnum) {
            case TestCaseEnum.CASE_1:
                return {
                    case: TestCaseEnum.CASE_1,
                    firstName: faker.name.firstName("male"),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    phoneNumber: faker.finance.account(9),
                    description: 'opis nr: ' + faker.finance.account(15)
                };
            case TestCaseEnum.CASE_2:
                return {
                    case: TestCaseEnum.CASE_2,
                    firstName: faker.name.firstName("female"),
                    lastName: faker.name.lastName() + "-" + faker.name.lastName(),
                    email: faker.internet.email(),
                    phoneNumber: '+48-' + faker.finance.account(3) + "-" + faker.finance.account(3) + "-" + faker.finance.account(3),
                    description: null
                };
            case TestCaseEnum.CASE_3:
                return {
                    case: TestCaseEnum.CASE_3,
                    firstName: faker.name.firstName("female"),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    phoneNumber: null,
                    description: null
                };
            case TestCaseEnum.CASE_4:
                return {
                    case: TestCaseEnum.CASE_4,
                    firstName: faker.name.firstName("female"),
                    lastName: faker.name.lastName(),
                    email: null,
                    phoneNumber: faker.finance.account(9),
                    description: null
                };
        }
    }
}