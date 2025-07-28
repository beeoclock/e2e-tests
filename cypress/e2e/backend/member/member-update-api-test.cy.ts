import {MemberApi} from "../../../support/beeoclock/backend/panel/member/MemberApi";
import {MemberAPIHelper} from "../../../support/beeoclock/backend/panel/member/helper/MemberAPIHelper";
import {faker} from "@faker-js/faker";

describe('member update api test', function () {
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

    it('update owner member', function () {
        const updatedMember = MemberAPIHelper.createPutPayload(member, {
            phone: faker.phone.number('501######')
        });
        cy.log('updatedMember', JSON.stringify(updatedMember))

        MemberApi.updateMember(ownerId, updatedMember)
    })
})