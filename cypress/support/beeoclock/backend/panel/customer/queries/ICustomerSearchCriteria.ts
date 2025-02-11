export interface ICustomerSearchCriteria {
    "X-Business-Tenant-Id": string,
    orderBy: string,
    orderDir: string,
    page: number,
    phrase: string,
    pageSize: number,
}