import { CancellationOrderDetailsElement } from "./page-element/CancellationOrderDetailsElement";
import { CancelledOrderMainDetailsElement } from "./page-element/CancelledOrderMainDetailsElement";
import { CancelledOrderSummaryElement } from "./page-element/CancelledOrderSummaryElement";

export class OrderCancellationPageElement {

    public static CancelledOrderSummaryElement: CancelledOrderSummaryElement = new CancelledOrderSummaryElement()
    public static CancellationOrderDetailsElement: CancellationOrderDetailsElement = new CancellationOrderDetailsElement()
    public static CancelledOrderMainDetailsElement: CancelledOrderMainDetailsElement = new CancelledOrderMainDetailsElement()
}