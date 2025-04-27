import {LeftMenuPage} from "../../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TableCommonPage} from "../../../../support/beeoclock/page-element/configuration/tab/common/table/TableCommonPage";
import {SpecialistNameEnum} from "../../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {MemberTableCellEnum} from "../../../../support/beeoclock/page-element/configuration/tab/members/enum/MemberTableCellEnum";
import {CommonElementPage} from "../../../../support/beeoclock/page-element/common/common-element/CommonElementPage";

describe('Members Test', () => {

    beforeEach('login', () => {
        cy.loginOnPanel()
        LeftMenuPage.clickMembersTab()
    })

    it('Members Test', function (): void {
        LeftMenuPage.assertIsSynchronized()
        TableCommonPage.assertTableCount(3)

        assertTomaszZalewskiRow()
        assertEndToEndRow()
    })

    it('create new member', function (): void {
        LeftMenuPage.assertIsSynchronized()
        TableCommonPage.assertTableCount(3)

        CommonElementPage.clickAddResourceButton()
    })

    function assertTomaszZalewskiRow() {
        TableCommonPage.verifyTableRowElement(SpecialistNameEnum.ZALEWSKI, MemberTableCellEnum.PHONE, null)
        TableCommonPage.verifyTableRowElement(SpecialistNameEnum.ZALEWSKI, MemberTableCellEnum.EMAIL, 'Fryzjer@example.com')
        TableCommonPage.verifyTableRowElement(SpecialistNameEnum.ZALEWSKI, MemberTableCellEnum.SERVICES, '3')
        TableCommonPage.verifyTableRowElement(SpecialistNameEnum.ZALEWSKI, MemberTableCellEnum.ROLE, 'Administrator')
        TableCommonPage.verifyTableRowElement(SpecialistNameEnum.ZALEWSKI, MemberTableCellEnum.STATUS, 'Aktywny')
        TableCommonPage.verifyTableRowElement(SpecialistNameEnum.ZALEWSKI, MemberTableCellEnum.CREATED_AT, '10.06.2024, 16:57')
    }

    function assertEndToEndRow() {
        TableCommonPage.verifyTableRowElement(SpecialistNameEnum.E2E_E2E, MemberTableCellEnum.PHONE, null)
        TableCommonPage.verifyTableRowElement(SpecialistNameEnum.E2E_E2E, MemberTableCellEnum.EMAIL, 'e2e.testing@dev.beeoclock.com')
        TableCommonPage.verifyTableRowElement(SpecialistNameEnum.E2E_E2E, MemberTableCellEnum.SERVICES, '3')
        TableCommonPage.verifyTableRowElement(SpecialistNameEnum.E2E_E2E, MemberTableCellEnum.ROLE, 'Właściciel')
        TableCommonPage.verifyTableRowElement(SpecialistNameEnum.E2E_E2E, MemberTableCellEnum.STATUS, 'Aktywny')
        TableCommonPage.verifyTableRowElement(SpecialistNameEnum.E2E_E2E, MemberTableCellEnum.CREATED_AT, '25.04.2024, 14:02')
    }
})