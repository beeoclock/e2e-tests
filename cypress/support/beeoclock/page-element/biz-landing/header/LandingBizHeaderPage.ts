import {LandingHeaderComponent} from "./element/LandingHeaderComponent";
import {Assertions} from "../../configuration/tab/common/assertions/Assertions";
import {QueryAssertion} from "../../../common/assertion/QueryAssertion";

export class LandingBizHeaderPage {
    private element = new LandingHeaderComponent()

    public assertLogo(): LandingBizHeaderPage {
        Assertions.assertProperties(this.element.getLogo(), 'src', "https://biz.dev.beeoclock.com/pl/assets/new_logo.svg")
        Assertions.assertProperties(this.element.getLogoText(), 'src', "https://biz.dev.beeoclock.com/pl/assets/logo_text.svg")
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

    public readonly links = {
        services: 'Usługi',
        tariffs: 'Taryfy',
        faq: 'FAQ',
        contact: 'Kontakt',
        login: 'Zalogować się',
    }

}