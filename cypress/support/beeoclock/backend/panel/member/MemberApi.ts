import {ApiRequestHelper} from "../../../common/Interception/ApiRequestHelper";
import {CustomerSearchCriteriaBuilder} from "../customer/queries/CustomerSearchCriteriaBuilder";
import {HttpMethodEnum} from "../../../common/enum/HttpMethodEnum";

export class MemberApi extends ApiRequestHelper {

    public static getMembers(): any {
        const qs = new CustomerSearchCriteriaBuilder()
            .withOrderBy('name')
            .withOrderDir('asc')
            .withPage(1)
            .withPageSize(10)
            .build()
        return this.handleApiQueryRequest('/member/paged', qs)
    }

    public static updateMembers(memberId: string): any {
        const qs = new CustomerSearchCriteriaBuilder()
            .withOrderBy('name')
            .withOrderDir('asc')
            .withPage(1)
            .withPageSize(10)
            .build()
        return this.handleApiRequest(HttpMethodEnum.PUT, '/member/paged')
    }
}