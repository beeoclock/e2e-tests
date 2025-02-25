import { ICustomer } from "./ICustomer";

import { CustomerTypeEnum } from "../enum/CustomerTypeEnum";

import {faker} from "@faker-js/faker";
import {NumericUtils} from "../../../Utils/NumericUtils";
import { StateEnum } from "../../order/enum/StateEnum";
import { IStateHistory } from "../../state/interface/IStateHistory";

export class CustomerBuilder {
    private customer: ICustomer;

    constructor() {
        let firstName: string = faker.name.firstName();
        let lastName: string = faker.name.lastName();
        this.customer = {
            _version: "1",
            _id: NumericUtils.generateObjectId(),
            stateHistory: [],
            state: StateEnum.active,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            object: "CustomerDto",
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            phone: faker.phone.number(),
            email: firstName + "." + lastName + '@example.com',
            note: "",
            customerType: CustomerTypeEnum.NEW
        };
    }

    setId(id: string): CustomerBuilder {
        this.customer._id = id;
        return this;
    }

    setVersion(version: string): CustomerBuilder {
        this.customer._version = version;
        return this;
    }

    setStateHistory(stateHistory: IStateHistory[]): CustomerBuilder {
        this.customer.stateHistory = stateHistory;
        return this;
    }

    setState(state: StateEnum): CustomerBuilder {
        this.customer.state = state;
        return this;
    }

    setCreatedAt(createdAt: string): CustomerBuilder {
        this.customer.createdAt = createdAt;
        return this;
    }

    setUpdatedAt(updatedAt: string): CustomerBuilder {
        this.customer.updatedAt = updatedAt;
        return this;
    }

    setFirstName(firstName: string): CustomerBuilder {
        this.customer.firstName = firstName;
        return this;
    }

    setLastName(lastName: string): CustomerBuilder {
        this.customer.lastName = lastName;
        return this;
    }

    setPhone(phone: string): CustomerBuilder {
        this.customer.phone = phone;
        return this;
    }

    setEmail(email: string): CustomerBuilder {
        this.customer.email = email;
        return this;
    }

    setNote(note: string): CustomerBuilder {
        this.customer.note = note;
        return this;
    }

    setCustomerType(customerType: CustomerTypeEnum): CustomerBuilder {
        this.customer.customerType = customerType;
        return this;
    }

    build(): ICustomer {
        return this.customer;
    }
}
