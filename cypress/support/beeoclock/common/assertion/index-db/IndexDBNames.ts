import {BackendCommonEnum} from "../../../backend/enum/BackendCommonEnum";

export const indexDBNames = {
    order_db: `${BackendCommonEnum.X_Business_Tenant_Id}-order`,
    absence_db: `${BackendCommonEnum.X_Business_Tenant_Id}-absence`,
    payment_db: `${BackendCommonEnum.X_Business_Tenant_Id}-payment`,
    tariff_plan_db: `${BackendCommonEnum.X_Business_Tenant_Id}-tariff-plan`,
    service_db: `${BackendCommonEnum.X_Business_Tenant_Id}-service`,
    customer_db: `${BackendCommonEnum.X_Business_Tenant_Id}-customer`,
} as const;

export type IndexDBNames = keyof typeof indexDBNames;
