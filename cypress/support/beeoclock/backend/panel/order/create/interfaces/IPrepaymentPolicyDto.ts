export interface IPrepaymentPolicyDto {
    object: string;
    isRequired: boolean;
    isPercentage: boolean;
    value: string;
    minimalCancelTime: string;
}
