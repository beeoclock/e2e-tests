import {IndustryDetailsCommonElement} from "../common/IndustryDetailsCommonElement";

export class HealthCareIndustryDetails {
    private rehabilitateSelector: string = '#create-business-form-business-category-PhysicalRehabilitation'
    private psychologistSelector: string = '#create-business-form-business-category-Psychotherapy'
    private otherSelector: string = '#create-business-form-business-category-Other'

    private common = new IndustryDetailsCommonElement()

    public assertRehabilitateElement(): HealthCareIndustryDetails {
        this.common.getElementBySelector(this.rehabilitateSelector).find('.bi.bi-person-wheelchair').should('be.visible')
        this.common.getElementBySelector(this.rehabilitateSelector).contains(this.healthcareDetailNames.rehabilitate)
        return this
    }

    public assertPsychologistElement(): HealthCareIndustryDetails {
        this.common.getElementBySelector(this.psychologistSelector).find('.bi.bi-person-arms-up').should('be.visible')
        this.common.getElementBySelector(this.psychologistSelector).contains(this.healthcareDetailNames.psychologist)
        return this
    }

    public assertOtherIndustryElement(): HealthCareIndustryDetails {
        this.common.getElementBySelector(this.otherSelector).find('.bi.bi-lightbulb').should('be.visible')
        this.common.getElementBySelector(this.otherSelector).contains(this.healthcareDetailNames.other)
        return this
    }

    public clickOnGivenDetail(detailName: string): HealthCareIndustryDetails {
        cy.get('li').contains(detailName)
            .click()
        return this
    }

    public readonly healthcareDetailNames = {
        rehabilitate: 'Rehabilitacja fizyczna',
        psychologist: 'Psychoterapia',
        other: 'Inne'
    };
}