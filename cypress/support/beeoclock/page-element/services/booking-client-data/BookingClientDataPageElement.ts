import { CommentInput } from "./page-element/CommentInput";
import { EmailInput } from "./page-element/EmailInput";
import { FirstNameInput } from "./page-element/FirstNameInput";
import { PhoneInput } from "./page-element/PhoneInput";

export class BookingClientDataPageElement {

    public static FirstNameInput: FirstNameInput = new FirstNameInput();
    public static EmailInput: EmailInput = new EmailInput();
    public static PhoneInput: PhoneInput = new PhoneInput();
    public static CommentInput: CommentInput = new CommentInput();
}