export type WorkSchedule = {
    workDays: number[];
    startInSeconds: number;
    endInSeconds: number;
};

export type Address = {
    object: string;
    country: string;
    city: string;
    zipCode: string;
    streetAddressLineOne: string;
    streetAddressLineTwo: string;
    customLink: string | null;
};

export type ScheduleConfig = {
    schedules: WorkSchedule[];
    published: number;
    addresses: Address[];
};

export class UpdateBusinessProfileBuilder {
    private config: ScheduleConfig;

    constructor() {
        this.config = {
            schedules: [],
            published: 1,
            addresses: [],
        };
    }

    addSchedule(schedule: WorkSchedule): this {
        this.config.schedules.push(schedule);
        return this;
    }

    setSchedules(schedules: WorkSchedule[]): this {
        this.config.schedules = schedules;
        return this;
    }

    setPublished(published: number): this {
        this.config.published = published;
        return this;
    }

    addAddress(address: Address): this {
        this.config.addresses.push(address);
        return this;
    }

    setAddresses(addresses: Address[]): this {
        this.config.addresses = addresses;
        return this;
    }

    build(): Omit<ScheduleConfig & { _id?: string }, '_id'> {
        return this.config;
    }
}
