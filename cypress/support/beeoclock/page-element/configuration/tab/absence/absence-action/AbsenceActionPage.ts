import {AbsenceActionPageElement} from "./AbsenceActionPageElement";
import {AbsenceActionEnum} from "./enum/AbsenceActionEnum";
import {AbsenceApiInterceptionHelper} from "../../../../../common/Interception/absence/AbsenceApiInterceptionHelper";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";

export class AbsenceActionPage {

    public clickActionButton(): AbsenceActionPage {
        AbsenceActionPageElement.AbsenceActionButton.getElement()
            .click()
        return this;
    }

    public clickGivenAction(action: AbsenceActionEnum): AbsenceActionPage {
        if (action == AbsenceActionEnum.DEACTIVATE) {
            this.clickDeactivateAction()
        } if (action == AbsenceActionEnum.DELETE) {
            this.deleteActionButton()
        }
        return this;
    }

    private clickDeactivateAction(): AbsenceActionPage {
        const deactivateAbsence = AbsenceApiInterceptionHelper.deactivateAbsence()
        const getAbsence = AbsenceApiInterceptionHelper.getAbsence()
        AbsenceActionPageElement.GivenActionButton.getElement(AbsenceActionEnum.DEACTIVATE)
            .click()
        ApiInterceptionHelper.waitForAlias(deactivateAbsence)
        ApiInterceptionHelper.waitForAlias(getAbsence)
        cy.wait(500)
        return this
    }

    private deleteActionButton(): AbsenceActionPage {
        const deleteAbsence = AbsenceApiInterceptionHelper.deleteAbsence()
        AbsenceActionPageElement.GivenActionButton.getElement(AbsenceActionEnum.DELETE)
            .click();
        ApiInterceptionHelper.waitForAlias(deleteAbsence)
        return this;
    }
}