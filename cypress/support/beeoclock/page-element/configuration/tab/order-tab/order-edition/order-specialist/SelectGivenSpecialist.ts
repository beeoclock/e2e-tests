import {SpecialistNameEnum} from "../../../../../common/enum/SpecialistNameEnum";

export class SelectGivenSpecialist {
    public getElement(specialist: SpecialistNameEnum): any {
        return cy.get('ion-item').contains(specialist)
            .scrollIntoView().should('be.visible')
    }
}