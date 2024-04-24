import { DateUtils } from "../../../../backend/Utils/DateUtils";
import { SelectDayPageElement } from "./SelectDayPageElement";

export class SelectDayPage {
    public selectNextDay(): SelectDayPage {
        SelectDayPageElement.SelectDayButton.getElement(DateUtils.getNextDayNumber())
            .click()
        return this;
    }
}