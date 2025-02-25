import {OrderActionButton} from "./page-element/OrderActionButton";
import {OrderGivenActionButton} from "./page-element/OrderGivenActionButton";
import {StatusSelectorComponent} from "./page-element/StatusSelectorComponent";

export class OrderActionTableElement {

    public static OrderActionButton: OrderActionButton = new OrderActionButton()
    public static OrderGivenActionButton: OrderGivenActionButton = new OrderGivenActionButton()
    public static StatusSelectorComponent: StatusSelectorComponent = new StatusSelectorComponent()
}