import {SpecificTableElement} from "./table-element/SpecificTableElement";
import {OrderTableElement} from "./table-element/order/OrderTableElement";
import {AbsenceTableElement} from "./table-element/absence/AbsenceTableElement";

export class CalendarTablePageElement {

    public static SpecificTableElement: SpecificTableElement = new SpecificTableElement()
    public static OrderTableElement: OrderTableElement = new OrderTableElement()
    public static AbsenceTableElement: AbsenceTableElement = new AbsenceTableElement()
}