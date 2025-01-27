import {GivenTimeBreakLabel} from "./break-science-given-time/GivenTimeBreakLabel";
import {SelectGivenTimeBreakButton} from "./break-science-given-time/SelectGivenTimeBreakButton";
import {SelectTimeRange} from "./breake-science-now/SelectTimeRange";

export class BreakNavigationElement {

    //science given time
    public static GivenTimeBreakLabel: GivenTimeBreakLabel = new GivenTimeBreakLabel()
    public static SelectGivenTimeBreakButton: SelectGivenTimeBreakButton = new SelectGivenTimeBreakButton()

    //science now
    public static SelectTimeRange: SelectTimeRange = new SelectTimeRange()
}