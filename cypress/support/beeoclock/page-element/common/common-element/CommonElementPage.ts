import {SaveButton} from "./element/SaveButton";

export class CommonElementPage {

    public static clickSaveButton(): CommonElementPage {
        SaveButton.getElement().click()
        return this
    }
}