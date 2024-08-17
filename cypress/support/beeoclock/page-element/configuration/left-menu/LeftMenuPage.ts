import {LeftMenuPageElement} from "./LeftMenuPageElement";
import {ApiInterceptionHelper} from "../../../common/Interception/ApiInterceptionHelper";
import {TabNameEnum} from "./enum/TabNameEnum";

export class LeftMenuPage {

    public static clickOnGivenTab(tab: string): LeftMenuPage {
        const getOrder = ApiInterceptionHelper.getOrder()
        const getAbsence = ApiInterceptionHelper.getAbsence()
        LeftMenuPageElement.TabElement.getElement(tab)
            .click()
        if (tab == TabNameEnum.ORDER) {
            ApiInterceptionHelper.waitForAlias(getOrder)
        }
        if (tab == TabNameEnum.CALENDAR) {
            ApiInterceptionHelper.waitForAlias(getOrder)
            ApiInterceptionHelper.waitForAlias(getAbsence)
        } if (tab == TabNameEnum.ABSENCE) {
            ApiInterceptionHelper.waitForAlias(getAbsence)
        }
        return this;
    }

    private static clickAbsenceTab(): LeftMenuPage {
        const getAbsence = ApiInterceptionHelper.getAbsence()
        LeftMenuPageElement.TabElement.getElement(TabNameEnum.ABSENCE)
            .click()
        ApiInterceptionHelper.waitForAlias(getAbsence)
        return this;
    }
}