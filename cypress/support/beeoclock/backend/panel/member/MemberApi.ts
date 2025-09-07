import {ApiRequestHelper, Environment} from "../../../common/Interception/ApiRequestHelper";
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
        return this.handleApiQueryRequest(Environment.dev, '/member/paged', qs)
    }

    public static updateMember(memberId: string, member: any): any {
        const updatedMember = {
            ...member,
        };

        return this.handleApiRequest(Environment.dev, HttpMethodEnum.PUT, `/member/${memberId}`, updatedMember)
    }
}