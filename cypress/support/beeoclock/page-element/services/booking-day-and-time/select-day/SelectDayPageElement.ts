import {BookButton} from "../navigation/page-element/BookButton";
import {SelectDayButton} from "./page-element/SelectDayButton";
import {SelectedServiceComponent} from "./page-element/SelectedServiceComponent";

export class SelectDayPageElement {

    public static SelectDayButton: SelectDayButton = new SelectDayButton();
    public static BookButton: BookButton = new BookButton();
    public static SelectedServiceComponent: SelectedServiceComponent = new SelectedServiceComponent();
}