import {LandingHeaderComponent} from "./element/LandingHeaderComponent";
import {Assertions} from "../../configuration/tab/common/assertions/Assertions";
import {QueryAssertion} from "../../../common/assertion/QueryAssertion";
import {BizLandingEnum} from "../common/BizLandingEnum";
import {BizLandingOuterHTML} from "fixtures/biz-landing/BizLandingOuterHTML";

export class LandingBizHeaderPage {
    public readonly links = {
        services: 'Usługi',
        tariffs: 'Taryfy',
        faq: 'FAQ',
        contact: 'Kontakt',
        login: 'Zaloguj się',
    }
    protected outerHtml = new BizLandingOuterHTML()
    private element = new LandingHeaderComponent()

    public assertLogo(): LandingBizHeaderPage {
        Assertions.assertProperties(this.element.getLogo(), 'src', "https://biz.dev.beeoclock.com/pl/assets/new_logo.svg")
        Assertions.assertProperties(this.element.getLogoText(), 'src', "https://biz.dev.beeoclock.com/pl/assets/logo_text.svg")
        return this
    }

    public assertHtml(): LandingBizHeaderPage {
        this.element.getElement().invoke('prop', 'outerHTML').then((html) => {
            expect(html).to.equal(this.outerHtml.getHeaderOuterHTML())
        })
        return this
    }

    public clickOnServiceLink(): LandingBizHeaderPage {
        this.element.getGivenHeaderLink(this.links.services)
            .click().then(() => {
            QueryAssertion.verifyCorrectUrl('https://biz.dev.beeoclock.com/pl/#services')
        })
        return this
    }

    public clickOnTariffsLink(): LandingBizHeaderPage {
        this.element.getGivenHeaderLink(this.links.tariffs)
            .click().then(() => {
            QueryAssertion.verifyCorrectUrl('https://biz.dev.beeoclock.com/pl/#tariffs')
        })
        return this
    }

    public clickOnFaqLink(): LandingBizHeaderPage {
        this.element.getGivenHeaderLink(this.links.faq)
            .click().then(() => {
            QueryAssertion.verifyCorrectUrl('https://biz.dev.beeoclock.com/pl/#faq')
        })
        return this
    }

    public clickOnContactLink(): LandingBizHeaderPage {
        this.element.getGivenHeaderLink(this.links.contact)
            .click().then(() => {
            QueryAssertion.verifyCorrectUrl('https://biz.dev.beeoclock.com/pl/#contact')
        })
        return this
    }

    public assertLoginLink(): LandingBizHeaderPage {
        this.element.getGivenHeaderLink(this.links.login).should('have.attr', 'target', '_blank');
        this.element.getGivenHeaderLink(this.links.login)
            .should('have.attr', 'href', BizLandingEnum.IDENTITY_URL)
        cy.request(BizLandingEnum.IDENTITY_URL).its('status').should('eq', 200);

        return this;
    }

}