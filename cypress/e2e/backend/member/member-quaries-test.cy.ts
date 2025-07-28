import {MemberApi} from "../../../support/beeoclock/backend/panel/member/MemberApi";

describe('Members queries', function () {
    let ownerId: string
    let member: any

    it('get members', function () {
        MemberApi.getMembers().then((res) => {
            const items = res.items;

            member = items.find((item) => item.role === 'OWNER');
            expect(member, 'Owner member should exist').to.not.be.undefined;
            const Id = member._id;
            ownerId = Id.toString();
        })
    })

    it('update members', function () {
        MemberApi.updateMembers(ownerId, JSON.stringify(member))
    })
})