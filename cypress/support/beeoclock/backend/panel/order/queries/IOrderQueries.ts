export interface IOrderQueries {

    'X-Business-Tenant-Id': string,
    orderBy: string,
    orderDir: string,
    page: number,
    pageSize: number,
    start?: string
    end?: string
}
