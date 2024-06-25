import {AddServiceButton} from "./page-element/AddServiceButton";
import {SelectServiceButton} from "./page-element/SelectServiceButton";
import {SelectSpecificServiceCheckbox} from "./page-element/SelectSpecificServiceCheckbox";
import {SelectedServiceElement} from "./page-element/SelectedServiceElement";
import {SelectTimeArrow} from "./time/SelectTimeArrow";
import {SelectSpecificTime} from "./time/SelectSpecificTime";
import {OrderPriceInput} from "./finance/OrderPriceInput";
import {SelectSpecialist} from "./specialist/SelectSpecialist";
import {OrderDateInput} from "./date/OrderDateInput";
import {PublicNoteInput} from "./note/PublicNoteInput";
import {AddButton} from "./navigation/AddButton";

export class RightPanelServicesPageElement {

    public static AddServiceButton: AddServiceButton = new AddServiceButton()
    public static SelectServiceButton: SelectServiceButton = new SelectServiceButton()
    public static SelectSpecificServiceCheckbox: SelectSpecificServiceCheckbox = new SelectSpecificServiceCheckbox()
    public static SelectedServiceElement: SelectedServiceElement = new SelectedServiceElement()
    public static SelectTimeArrow: SelectTimeArrow = new SelectTimeArrow()
    public static SelectSpecificTime: SelectSpecificTime = new SelectSpecificTime()
    public static OrderPriceInput: OrderPriceInput = new OrderPriceInput()
    public static SelectSpecialist: SelectSpecialist = new SelectSpecialist()
    public static OrderDateInput: OrderDateInput = new OrderDateInput()
    public static PublicNoteInput: PublicNoteInput = new PublicNoteInput()
    public static AddButton: AddButton = new AddButton()
}