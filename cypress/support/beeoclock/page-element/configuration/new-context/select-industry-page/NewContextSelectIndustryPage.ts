import {NewContextSelectIndustryElement} from "./element/NewContextSelectIndustryElement";
import {QueryAssertion} from "../../../../common/assertion/QueryAssertion";

export class NewContextSelectIndustryPage {
    private element = new NewContextSelectIndustryElement()

    public assertLearningIndustryElement(): NewContextSelectIndustryPage {
        this.element.getLearningIndustryElement().find('.bi.bi-mortarboard-fill').should('be.visible')
        this.element.getLearningIndustryElement().contains(this.industryNames.learning)
        return this
    }

    public assertCosmeticIndustryElement(): NewContextSelectIndustryPage {
        this.element.getCosmeticIndustryElement().find('.bi.bi-person-hearts').should('be.visible')
        this.element.getCosmeticIndustryElement().contains(this.industryNames.cosmetic)
        return this
    }

    public assertHealthCareIndustryElement(): NewContextSelectIndustryPage {
        this.element.getHealthcareIndustryElement().find('.bi.bi-heart-pulse-fill').should('be.visible')
        this.element.getHealthcareIndustryElement().contains(this.industryNames.healthcare)
        return this
    }

    public assertOtherIndustryElement(): NewContextSelectIndustryPage {
        this.element.getOtherIndustryElement().find('.bi.bi-lightbulb').should('be.visible')
        this.element.getOtherIndustryElement().contains(this.industryNames.other)
        return this
    }

    public assertElementLength(length: number): NewContextSelectIndustryPage {
        cy.get('.grid.w-full.gap-6.grid-cols-2')
            .find('.bg-white.border.border-gray-200.rounded-lg')
            .should('have.length', length)
        return this;
    }

    public clickOnGivenIndustry(industry: string): NewContextSelectIndustryPage {
       cy.contains('li', industry).click()
        return this;
    }

    public assertTitle(): NewContextSelectIndustryPage {
        cy.contains('h1', 'Jaka jest Twoja branża?')
        return this;
    }

    public assertState(): NewContextSelectIndustryPage {
        QueryAssertion.verifyCorrectUrl('/identity/create-business/industry')
        return this;
    }

    public readonly industryNames = {
        learning: 'Nauczanie i konsultacje',
        cosmetic: 'Branża kosmetyczna',
        healthcare: 'Opieka zdrowotna',
        other: 'Inne'
    };
}