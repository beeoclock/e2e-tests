import {OrderSummaryPriceElement} from "./summary/OrderSummaryPriceElement";
import {OrderSummaryTimeElement} from "./summary/OrderSummaryTimeElement";
import {OrderSummaryDateElement} from "./summary/OrderSummaryDateElement";
import {OrderSummarySelectedServiceElement} from "./summary/OrderSummarySelectedServiceElement";
import {OrderSummarySpecialistElement} from "./summary/OrderSummarySpecialistElement";
import {OrderCustomerSummaryElement} from "./summary/OrderCustomerSummaryElement";
import {PaymentMethodSelector} from "./payment/PaymentMethodSelector";
import {SelectPaymentMethodElement} from "./payment/SelectPaymentMethodElement";
import {PaymentStatusSelector} from "./payment/PaymentStatusSelector";
import {SelectPaymentStatusElement} from "./payment/SelectPaymentStatusElement";
import {BusinessNoteInputElement} from "./payment/BusinessNoteInputElement";

export class SummaryAndPaymentServicePageElement {

    public static OrderSummaryPriceElement: OrderSummaryPriceElement = new OrderSummaryPriceElement()
    public static OrderSummaryTimeElement: OrderSummaryTimeElement = new OrderSummaryTimeElement()
    public static OrderSummaryDateElement: OrderSummaryDateElement = new OrderSummaryDateElement()
    public static OrderSummarySelectedServiceElement: OrderSummarySelectedServiceElement = new OrderSummarySelectedServiceElement()
    public static OrderSummarySpecialistElement: OrderSummarySpecialistElement = new OrderSummarySpecialistElement()
    public static OrderCustomerSummaryElement: OrderCustomerSummaryElement = new OrderCustomerSummaryElement()
    public static PaymentMethodSelector: PaymentMethodSelector = new PaymentMethodSelector()
    public static SelectPaymentMethodElement: SelectPaymentMethodElement = new SelectPaymentMethodElement()
    public static PaymentStatusSelector: PaymentStatusSelector = new PaymentStatusSelector()
    public static SelectPaymentStatusElement: SelectPaymentStatusElement = new SelectPaymentStatusElement()
    public static BusinessNoteInputElement: BusinessNoteInputElement = new BusinessNoteInputElement()
}