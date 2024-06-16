import { SelectSpecificTime } from "./page-element/SelectSpecificTime";
import {SelectedDayAssert} from "./page-element/SelectedDayAssert";

export class SelectTimePageElement {

    public static SelectSpecificTime: SelectSpecificTime = new SelectSpecificTime(); 
    public static SelectedDayAssert: SelectedDayAssert = new SelectedDayAssert(); 
}