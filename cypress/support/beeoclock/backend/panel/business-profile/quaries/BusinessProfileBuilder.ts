import {IBusinessProfile} from "./IBusinessProfile";

export class BusinessProfileBuilder {
    private dto: IBusinessProfile = {
        object: 'BusinessProfileDto',
        _id: 'default-id',
        state: 'active',
        stateHistory: [
            {state: 'active', setAt: '2025-01-01T00:00:00.000Z'},
        ],
        published: 1,
        name: 'defaultName',
        facilities: [],
        socialNetworkLinks: [],
        bookingSettings: {
            autoActionSettings: {
                isEnabled: false,
                actionType: 'NONE',
                delayInSeconds: 0,
            },
            latestBooking: 1209600,
            earliestBooking: 86400,
            slotSettings: {
                slotIntervalInSeconds: 1800,
                slotBuildingStrategy: 'ByInterval',
                slotRetrievingStrategy: 'IncludeRequested',
            },
            autoBookOrder: true,
            mandatoryAttendeeProperties: ['phone'],
        },
        businessSettings: {
            timeZone: 'Europe/Warsaw',
            currencies: ['PLN'],
            baseCurrency: 'PLN',
            availableLanguages: ['pl', 'en'],
            baseLanguage: 'pl',
            emailLanguage: 'en',
        },
        panelSettings: {
            orderServiceColorMode: 'byService',
        },
        publicPageSettings: {
            primaryColor: '#000000',
        },
        paymentSettings: null,
        notificationSettings: {
            reminderSettings: {
                sendNotificationConditionType: 'allow',
                reminders: [
                    {reminderTimeInMinutes: 60, actionType: 'confirm', priority: 'high'},
                    {reminderTimeInMinutes: 1440, actionType: 'confirm', priority: 'high'},
                ],
                escalationContact: '',
            },
            smsNotificationSettings: {
                sendNotificationConditionType: 'allow',
                activeProviderName: 'twilio',
                allowedSmsTypes: {
                    allowAll: true,
                    specificTypes: [],
                },
                providers: [],
            },
            emailNotificationSettings: {
                sendNotificationConditionType: 'allow',
                emailLanguage: 'en',
                allowedEmailTypes: {
                    allowAll: true,
                    specificTypes: [],
                },
            },
            pushNotificationSettings: {
                sendNotificationConditionType: 'allow',
                allowedPushTypes: {
                    allowAll: true,
                    specificTypes: [],
                },
            },
        },
        addresses: null,
        schedules: [
            {
                workDays: [2, 3, 4, 5, 7],
                startInSeconds: 39600,
                endInSeconds: 72000,
            },
        ],
        specialSchedules: [],
        contacts: [],
        gallery: [],
        logo: null,
        banners: [],
    };

    withId(id: string): this {
        this.dto._id = id;
        return this;
    }

    withName(name: string): this {
        this.dto.name = name;
        return this;
    }

    withState(state: 'active' | 'deleted'): this {
        this.dto.state = state;
        return this;
    }

    build(): IBusinessProfile {
        return this.dto;
    }
}
