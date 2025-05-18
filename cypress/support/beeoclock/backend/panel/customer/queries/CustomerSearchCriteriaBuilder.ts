import {CustomerStateEnum} from "../enum/CustomerStateEnum";
import {ICustomerSearchCriteria} from "./ICustomerSearchCriteria";

export class CustomerSearchCriteriaBuilder {
    private criteria: Partial<ICustomerSearchCriteria> = {};

    public withTenantId(tenantId: string): this {
        this.criteria["X-Business-Tenant-Id"] = tenantId;
        return this;
    }

    public withOrderBy(orderBy: string): this {
        this.criteria.orderBy = orderBy;
        return this;
    }

    public withOrderDir(orderDir: string): this {
        this.criteria.orderDir = orderDir;
        return this;
    }

    public withPage(page: number): this {
        this.criteria.page = page;
        return this;
    }

    public withPhrase(phrase: string): this {
        this.criteria.phrase = phrase;
        return this;
    }

    public withPageSize(pageSize: number): this {
        this.criteria.pageSize = pageSize;
        return this;
    }

    public withState(state: CustomerStateEnum): this {
        this.criteria.state = state;
        return this;
    }

    public withUpdatedScience(updatedScience: string): this {
        this.criteria.updatedSince = updatedScience;
        return this;
    }

    public build(): ICustomerSearchCriteria {
        return this.criteria as ICustomerSearchCriteria;
    }
}
