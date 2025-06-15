export interface IBusinessProfile {
    object: 'BusinessProfileDto';
    _id: string;
    state: 'active' | 'deleted';
    stateHistory: {
        state: 'active' | 'deleted';
        setAt: string;
    }[];
    published: number;
    name: string;
    facilities: any[];
    socialNetworkLinks: any[];
    bookingSettings: {
        autoActionSettings: {
            isEnabled: boolean;
            actionType: 'NONE' | string;
            delayInSeconds: number;
        };
        latestBooking: number;
        earliestBooking: number;
        slotSettings: {
            slotIntervalInSeconds: number;
            slotBuildingStrategy: string;
            slotRetrievingStrategy: string;
        };
        autoBookOrder: boolean;
        mandatoryAttendeeProperties: string[];
    };
    businessSettings: {
        timeZone: string;
        currencies: string[];
        baseCurrency: string;
        availableLanguages: string[];
        baseLanguage: string;
        emailLanguage: string;
    };
    panelSettings: {
        orderServiceColorMode: string;
    };
    publicPageSettings: {
        primaryColor: string;
    };
    paymentSettings: any;
    notificationSettings: {
        reminderSettings: {
            sendNotificationConditionType: string;
            reminders: {
                reminderTimeInMinutes: number;
                actionType: string;
                priority: string;
            }[];
            escalationContact: string;
        };
        smsNotificationSettings: {
            sendNotificationConditionType: string;
            activeProviderName: string;
            allowedSmsTypes: {
                allowAll: boolean;
                specificTypes: string[];
            };
            providers: any[];
        };
        emailNotificationSettings: {
            sendNotificationConditionType: string;
            emailLanguage: string;
            allowedEmailTypes: {
                allowAll: boolean;
                specificTypes: string[];
            };
        };
        pushNotificationSettings: {
            sendNotificationConditionType: string;
            allowedPushTypes: {
                allowAll: boolean;
                specificTypes: string[];
            };
        };
    };
    addresses: any;
    schedules: {
        workDays: number[];
        startInSeconds: number;
        endInSeconds: number;
    }[];
    specialSchedules: any[];
    contacts: any[];
    gallery: any[];
    logo: any;
    banners: any[];
}
