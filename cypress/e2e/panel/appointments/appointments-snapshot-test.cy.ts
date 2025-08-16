import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {AppointmentsFilterHtmlElement} from "../../../support/beeoclock/page-element/configuration/tab/appointments/enum/AppointmentsFilterHtmlElement";

describe('panel snapshot test', (): void => {
    let htmlElement: AppointmentsFilterHtmlElement = new AppointmentsFilterHtmlElement()

    beforeEach('setup', (): void => {
        cy.loginOnPanel()
        LeftMenuPage.clickOnVisitsTab()
        LeftMenuPage.assertIsSynchronized()
        cy.wait(1000)
    })

    it('assert filter snapshot', (): void => {
        assertStatusFilter(htmlElement.getStatusHtml())
    })

    function assertStatusFilter(expectedHtml: string): void {
        const selector = cy.get('order-service-filter-component')
            .find('ion-select-order-service-status').scrollIntoView().should('be.visible')


        selector.invoke('prop', 'innerHTML').then((innerHTML: string): void => {
            expect(innerHTML).to.equals(expectedHtml)
        })
    }
})