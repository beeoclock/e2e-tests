import {BizLandingPages} from "../../support/beeoclock/page-element/biz-landing/BizLandingPages";
import {PanelLoginPage} from "../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {QueryAssertion} from "../../support/beeoclock/common/assertion/QueryAssertion";
import {BackendCommonEnum} from "../../support/beeoclock/backend/enum/BackendCommonEnum";
import {CalendarPages} from "../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";

describe('biz-landing-demo', (): void => {

    beforeEach('login', (): void => {
        visit()
    })

    it('visit demo domain', (): void => {
        BizLandingPages.LandingBizDemoSection
            .clickDemoButton()

        PanelLoginPage.assertEmail('demo@beeoclock.com')

        PanelLoginPage.clickLoginButton()
        PanelLoginPage.selectGivenBusiness(`John's Barber Shop`)

        QueryAssertion.verifyCorrectUrl(`https://crm.dev.beeoclock.com/${BackendCommonEnum.DEMO_TENANT_ID}/event/calendar-with-specialists`)
        CalendarPages.CalendarNavigationPage
            .verifyCurrenDate()
    })

    function visit(): void {
        cy.visit("https://biz.dev.beeoclock.com/pl/",
            {timeout: 30000, failOnStatusCode: false})
    }

    before((): void => {
        cy.clearAllLocalStorage()
        Cypress.env('skipClear', true);
    });
})