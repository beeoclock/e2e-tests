import {SelectGivenSpecialist} from "./order-specialist/SelectGivenSpecialist";
import {SelectSpecialistButton} from "./order-specialist/SelectSpecialistButton";
import {OrderCustomerButton} from "./order-customer/OrderCustomerButton";
import {OrderPriceComponent} from "./order-price/OrderPriceComponent";

export class OrderEditionFormPageElement {

    //specialist
    public static SelectGivenSpecialist: SelectGivenSpecialist = new SelectGivenSpecialist()
    public static SelectSpecialistButton: SelectSpecialistButton = new SelectSpecialistButton()

    //customer
    public static OrderCustomerButton: OrderCustomerButton = new OrderCustomerButton()

    //price
    public static OrderPriceComponent: OrderPriceComponent = new OrderPriceComponent()
}