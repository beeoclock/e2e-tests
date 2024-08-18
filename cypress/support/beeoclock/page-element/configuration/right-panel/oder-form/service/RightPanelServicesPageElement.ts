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
import {OpenPriceInputElement} from "./finance/OpenPriceInputElement";
import {SelectCustomerOption} from "./customer/SelectCustomerOption";
import {SelectSpecificCustomerOption} from "./customer/SelectSpecificCustomerOption";
import {NameInput} from "./customer/new-customer/NameInput";
import {LastNameInput} from "./customer/new-customer/LastNameInput";
import {EmailInput} from "./customer/new-customer/EmailInput";
import {PhoneInput} from "./customer/new-customer/PhoneInput";
import {ConfirmButton} from "./customer/new-customer/ConfirmButton";
import {ExistingCustomerInput} from "./customer/existing-customer/ExistingCustomerInput";
import {CustomerOption} from "./customer/existing-customer/CustomerOption";

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
    public static OpenPriceInputElement: OpenPriceInputElement = new OpenPriceInputElement()

    //customer common option
    public static SelectCustomerOption: SelectCustomerOption = new SelectCustomerOption()
    public static SelectSpecificCustomerOption: SelectSpecificCustomerOption = new SelectSpecificCustomerOption()

    //new customer element
    public static NameInput: NameInput = new NameInput()
    public static LastNameInput: LastNameInput = new LastNameInput()
    public static EmailInput: EmailInput = new EmailInput()
    public static PhoneInput: PhoneInput = new PhoneInput()
    public static ConfirmButton: ConfirmButton = new ConfirmButton()

    //existing customer
    public static ExistingCustomerInput: ExistingCustomerInput = new ExistingCustomerInput()
    public static CustomerOption: CustomerOption = new CustomerOption()
}
