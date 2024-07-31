import {AddOrderButton} from "./page-element/AddOrderButton";
import {SelectServiceButton} from "./page-element/SelectServiceButton";
import {SelectSpecificServiceCheckbox} from "./page-element/SelectSpecificServiceCheckbox";
import {SelectedServiceElement} from "./page-element/SelectedServiceElement";
import {SelectTimeButton} from "./time/SelectTimeButton";
import {OrderPriceInput} from "./finance/OrderPriceInput";
import {SelectSpecialist} from "./specialist/SelectSpecialist";
import {OrderDateInput} from "./date/OrderDateInput";
import {PublicNoteInput} from "./note/PublicNoteInput";
import {AddButton} from "./navigation/AddButton";
import { AddServiceButton } from "./page-element/AddServiceButton";
import { SelectSpecificHour } from "./time/SelectSpecificHour";
import {SelectSpecificMinute} from "./time/SelectSpecyficTime";
import {SubmitButton} from "./time/SubmitButton";

export class RightPanelServicesPageElement {

    public static AddOrderButton: AddOrderButton = new AddOrderButton()
    public static AddServiceButton: AddServiceButton = new AddServiceButton()
    public static SelectServiceButton: SelectServiceButton = new SelectServiceButton()
    public static SelectSpecificServiceCheckbox: SelectSpecificServiceCheckbox = new SelectSpecificServiceCheckbox()
    public static SelectedServiceElement: SelectedServiceElement = new SelectedServiceElement()
    public static SelectTimeButton: SelectTimeButton = new SelectTimeButton()
    public static SelectSpecificHour: SelectSpecificHour = new SelectSpecificHour()
    public static SelectSpecificMinute: SelectSpecificMinute = new SelectSpecificMinute()
    public static OrderPriceInput: OrderPriceInput = new OrderPriceInput()
    public static SelectSpecialist: SelectSpecialist = new SelectSpecialist()
    public static OrderDateInput: OrderDateInput = new OrderDateInput()
    public static PublicNoteInput: PublicNoteInput = new PublicNoteInput()
    public static AddButton: AddButton = new AddButton()
    public static SubmitButton: SubmitButton = new SubmitButton()
}
