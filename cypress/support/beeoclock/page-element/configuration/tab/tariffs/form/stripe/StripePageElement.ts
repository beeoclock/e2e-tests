import {StripeInputComponent} from "./page-element/StripeInputComponent";
import {SubmitButton} from "./page-element/SubmitButton";
import {StripeSummary} from "./page-element/StripeSummary";

export class StripePageElement {

    public static StripeInputComponent: StripeInputComponent = new StripeInputComponent()
    public static SubmitButton: SubmitButton = new SubmitButton()
    public static StripeSummary: StripeSummary = new StripeSummary()
}