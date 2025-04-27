import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {AppointmentsFilterHtmlElement} from "../../../support/beeoclock/page-element/configuration/tab/appointments/enum/AppointmentsFilterHtmlElement";
import html = Mocha.reporters.html;

describe('panel snapshot test', (): void => {
    let htmlElement: AppointmentsFilterHtmlElement = new AppointmentsFilterHtmlElement()

    beforeEach('setup', () => {
        cy.loginOnPanel()
        LeftMenuPage.clickOnVisitsTab()
    })

    it('assert filter snapshot', (): void => {
        assertStatusFilter(htmlElement.getStatusHtml())
    })

    function assertStatusFilter(expectedHtml: string): void {
        cy.get('ion-select-order-service-status').invoke('prop', 'innerHTML').then((innerHTML: string):void => {
            expect(innerHTML).to.equals(expectedHtml)
        })

    }
})