import { DateUtils } from "../../../../backend/Utils/DateUtils";
import { DataAndTimeNavigationPageElement } from "./DataAndTimeNavigationPageElement";

export class DataAndTimeNavigationPage {

    public clickNextStepButton(): DataAndTimeNavigationPage {
        DataAndTimeNavigationPageElement.BookButton.getElement()
            .click()
        return this;
    }
}