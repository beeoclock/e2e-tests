import {LeftMenuPageElement} from "./LeftMenuPageElement";
import {ApiInterceptionHelper} from "../../../common/Interception/ApiInterceptionHelper";
import {TabNameEnum} from "./enum/TabNameEnum";

export class LeftMenuPage {

    public static clickOnGivenTab(tab: string): LeftMenuPage {
        const getOrder = ApiInterceptionHelper.getServices()
        LeftMenuPageElement.TabElement.getElement(tab)
            .click()
        if (tab == TabNameEnum.ORDER) {
            ApiInterceptionHelper.waitForAlias(getOrder)
        }
        return this;
    }
}