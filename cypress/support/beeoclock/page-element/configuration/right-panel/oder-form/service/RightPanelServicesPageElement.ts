import {AddServiceButton} from "./page-element/AddServiceButton";
import {SelectServiceButton} from "./page-element/SelectServiceButton";
import {SelectSpecificServiceCheckbox} from "./page-element/SelectSpecificServiceCheckbox";
import {SelectedServiceElement} from "./page-element/SelectedServiceElement";

export class RightPanelServicesPageElement {

    public static AddServiceButton: AddServiceButton = new AddServiceButton()
    public static SelectServiceButton: SelectServiceButton = new SelectServiceButton()
    public static SelectSpecificServiceCheckbox: SelectSpecificServiceCheckbox = new SelectSpecificServiceCheckbox()
    public static SelectedServiceElement: SelectedServiceElement = new SelectedServiceElement()
}