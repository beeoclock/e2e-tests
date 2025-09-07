import {ApiRequestHelper} from "../../../common/Interception/ApiRequestHelper";
import {CustomerSearchCriteriaBuilder} from "../customer/queries/CustomerSearchCriteriaBuilder";
import {HttpMethodEnum} from "../../../common/enum/HttpMethodEnum";
import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";

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

    public static updateMember(memberId: string, member: any): any {
        const updatedMember = {
            ...member,
        };

        return this.handleApiRequest(HttpMethodEnum.PUT, `/member/${memberId}`, updatedMember)
    }
}