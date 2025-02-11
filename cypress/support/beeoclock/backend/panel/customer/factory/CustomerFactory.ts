import {faker} from "@faker-js/faker";
import {ICustomer} from "../create/ICustomer";
import {CustomerTypeEnum} from "../enum/CustomerTypeEnum";
import {NumericUtils} from "support/beeoclock/backend/Utils/NumericUtils";
import {StateEnum} from "support/beeoclock/backend/state-history/StateEnum";

export class CustomerFactory {

    static createCustomer(): ICustomer {
        const firstName: string = faker.name.firstName();
        const lastName: string = faker.name.lastName();

        return {
            _version: "1",
            _id: NumericUtils.generateObjectId(),
            stateHistory: [],
            state: StateEnum.ACTIVE,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            object: "CustomerDto",
            firstName: firstName,
            lastName: lastName,
            phone: "48" + NumericUtils.generateRandomValueWithoutZeroPrefix(9),
            email: `${firstName}.${lastName}@example.com`,
            note: null,
            customerType: CustomerTypeEnum.REGULAR
        };
    }

    static createCustomCustomer(firstName: string, lastName: string): ICustomer {

        return {
            _version: "1",
            _id: NumericUtils.generateObjectId(),
            stateHistory: [],
            state: StateEnum.ACTIVE,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            object: "CustomerDto",
            firstName: firstName,
            lastName: lastName,
            phone: faker.phone.number(),
            email: `${firstName}.${lastName}@example.com`,
            note: "",
            customerType: CustomerTypeEnum.NEW
        }
    }
}
