import {AbsenceInputElement} from "./page-element/AbsenceInputElement";

export class AbsenceFilterPage {
    protected AbsenceInputElement: AbsenceInputElement = new AbsenceInputElement();

    public searchAbsence(value: string): AbsenceFilterPage {
        this.AbsenceInputElement.getSearchInput()
            .type(value).then(() => {
            this.AbsenceInputElement.getSearchButton().click()
        })
        return this;
    }
}