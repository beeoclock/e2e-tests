import {faker} from "@faker-js/faker";
import {TestCaseEnum} from "../../enum/TestCaseEnum";

export class ClientCreationDataProvider {
    static getTestData(caseEnum: TestCaseEnum) {

        switch (caseEnum) {
            case TestCaseEnum.CASE_1:
                return {
                    firstName: faker.name.firstName("male"),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    phoneNumber: faker.finance.account(9),
                    description: 'opis nr: ' + faker.finance.account(15)
                };
            case TestCaseEnum.CASE_2:
                return {
                    firstName: faker.name.firstName("female"),
                    lastName: faker.name.lastName() + " - " + faker.animal.bird(),
                    email: faker.internet.email(),
                    phoneNumber: faker.phone.number(),
                    description: null
                };
            case TestCaseEnum.CASE_3:
                return {
                    firstName: faker.name.firstName("female"),
                    lastName: faker.name.lastName() + " - " + faker.animal.bird(),
                    email: faker.internet.email(),
                    phoneNumber: null,
                    description: null
                };
            case TestCaseEnum.CASE_4:
                return {
                    firstName: faker.name.firstName("female"),
                    lastName: faker.name.lastName() + " - " + faker.animal.bird(),
                    email: null,
                    phoneNumber: faker.phone.number(),
                    description: null
                };
        }
    }
}