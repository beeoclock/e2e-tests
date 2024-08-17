import {AbsencePageElement} from "./AbsencePageElement";
import {SaveButton} from "../../../../common/common-element/element/SaveButton";
import {CommonElementPage} from "../../../../common/common-element/CommonElementPage";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";

export class AbsencePage {

    public verifyAbsenceFromDate(fromDate: string): AbsencePage {
        AbsencePageElement.AbsenceFromDate.getElement().invoke('prop', 'textContent').then(textContent => {
            expect(textContent).to.include(fromDate)
        })
        return this
    }

    public verifyAbsenceFromTime(fromTime: string): AbsencePage {
        AbsencePageElement.AbsenceFromTime.getElement().invoke('prop', 'textContent').then(textContent => {
            expect(textContent).to.include(fromTime+ ':00')
        })
        return this
    }

    public verifyAbsenceToDate(toDate: string): AbsencePage {
        AbsencePageElement.AbsenceToDate.getElement().invoke('prop', 'textContent').then(textContent => {
            expect(textContent).to.include(toDate)
        })
        return this
    }

    public verifyAbsenceToTime(toTime: string): AbsencePage {
        AbsencePageElement.AbsentToTime.getElement().invoke('prop', 'textContent').then(textContent => {
            expect(textContent).to.include(toTime)
        })
        return this
    }

    public typeAbsenceNote(note: string): AbsencePage {
        AbsencePageElement.AbsenceNoteInput.getElement()
            .type(note)
        return this;
    }

    public clickSaveButton(): AbsencePage {
        const createAbsence = ApiInterceptionHelper.createAbsence()
        const getAbsence = ApiInterceptionHelper.getAbsence()
        CommonElementPage.clickSaveButton()
        ApiInterceptionHelper.waitForAlias(createAbsence)
        ApiInterceptionHelper.waitForAlias(getAbsence)
        return this;
    }
}