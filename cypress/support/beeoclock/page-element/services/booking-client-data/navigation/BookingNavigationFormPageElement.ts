import {SaveButton} from "./page-element/SeveButton";
import {NextServiceLink} from "./page-element/NextServiceLink";
import { PayNowButton } from "./page-element/PayNowButton";

export class BookingNavigationFormPageElement {

    public static SaveButton: SaveButton = new SaveButton();
    public static NextServiceLink: NextServiceLink = new NextServiceLink();
    public static PayNowButton: PayNowButton = new PayNowButton();
}