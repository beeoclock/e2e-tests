import {MemberApi} from "../../../support/beeoclock/backend/panel/member/MemberApi";

describe('Members queries', function () {
    let ownerId: string

    it('get members', function () {
        MemberApi.getMembers().then((res) => {
            const items = res.items;

            const owner = items.find((item) => item.role === 'OWNER');
            expect(owner, 'Owner member should exist').to.not.be.undefined;
            const Id = owner._id;
            ownerId = Id.toString();
        })
    })

    it('update members', function () {

    })
})