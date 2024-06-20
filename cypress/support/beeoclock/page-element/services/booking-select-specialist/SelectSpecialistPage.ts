import {SelectSpecialistPageElement} from "./SelectSpecialistPageElement";

export class SelectSpecialistPage {

    public selectSpecificSpecialist(specialist: string): SelectSpecialistPage {
        SelectSpecialistPageElement.SpecificSpecialistElement.getElement(specialist)
            .click()
        return this;
    }
}