import {CalendarReloadButton} from "./element/CalendarReloadButton";
import {SaveButton} from "./element/SaveButton";
import {ApiInterceptionHelper} from "../../../common/Interception/ApiInterceptionHelper";
import {TabNameEnum} from "../../configuration/left-menu/enum/TabNameEnum";

export class CommonElementPage {


    public static clickSaveButton(): CommonElementPage {
        SaveButton.getElement().click()
        return this;
    }

    public static reloadOnCalendar(): CommonElementPage {
        // const getOrder  = ApiInterceptionHelper.getOrder()
        CalendarReloadButton.getElement()
            .click()
        // ApiInterceptionHelper.waitForAlias(getOrder)
        return this
    }
}