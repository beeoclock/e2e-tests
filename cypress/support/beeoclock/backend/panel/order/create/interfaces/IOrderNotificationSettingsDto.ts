export interface IOrderNotificationSettingsDto {
    object: string;
    sendNotification: boolean;
    sendTypes: string[];
    sendReceivers: string[];
}