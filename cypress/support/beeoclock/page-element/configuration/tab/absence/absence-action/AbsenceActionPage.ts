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
        // const deactivateAbsence = AbsenceApiInterceptionHelper.deactivateAbsence()
        AbsenceActionPageElement.GivenActionButton.getElement(AbsenceActionEnum.DEACTIVATE)
            .click()
        // ApiInterceptionHelper.waitForAlias(deactivateAbsence)
        return this
    }

    private deleteActionButton(): AbsenceActionPage {
        // const deleteAbsence = AbsenceApiInterceptionHelper.deleteAbsence();

        cy.on('window:confirm', (text) => {
            expect(text).to.contain('Czy na pewno chcesz usunąć nieobecność?');
            return true;
        });

        AbsenceActionPageElement.GivenActionButton.getElement(AbsenceActionEnum.DELETE)
            .click();

        // ApiInterceptionHelper.waitForAlias(deleteAbsence);
        return this;
    }

}