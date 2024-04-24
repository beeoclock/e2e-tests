import { values } from "cypress/types/lodash";
import { BookingPageElement } from "./BookingPageElement";

export class BookingPage {

    public typeFirstName(firstName: string): BookingPage {
        this.verifyFirstNameLabel()
        BookingPageElement.FirstNameInput.getElement()
            .type(firstName).then(() => {
                BookingPageElement.FirstNameInput.getElement().invoke('prop', 'value').then(value => {
                    expect(value).to.contain(firstName)
                })
            })
        return this;
    }

    public typeEmail(email: string): BookingPage {
        this.verifyEmailLabel()
        BookingPageElement.EmailInput.getElement()
            .type(email).then(() => {
                BookingPageElement.EmailInput.getElement().invoke('prop', 'value').then(value => {
                    expect(value).to.contain(email)
                })
            })
        return this;
    }

    public typePhoneNumber(phoneNumber: string): BookingPage {
        this.verifyPhoneNumberLabel()
        BookingPageElement.PhoneInput.getElement()
            .type(phoneNumber).then(() => {
                BookingPageElement.PhoneInput.getElement().invoke('prop', 'value').then(value => {
                    expect(value).to.contain(phoneNumber)
                })
            })
        return this;
    }

    public typeComment(comment: string): BookingPage {
        BookingPageElement.CommentInput.getElement()
            .type(comment).then(() => {
                BookingPageElement.CommentInput.getElement().invoke('prop', 'value').then(value => {
                    expect(value).to.contain(comment)
                })
            })
        return this;
    }

    private verifyFirstNameLabel(): BookingPage {
        BookingPageElement.FirstNameInput.getElement().parent().find('label').contains('First name');
        return this;
    }

    private verifyEmailLabel(): BookingPage {
        BookingPageElement.EmailInput.getElement().parent().find('label').contains('E-mail');
        return this;
    }

    private verifyPhoneNumberLabel(): BookingPage {
        BookingPageElement.PhoneInput.getElement().parent().find('label').contains('Phone');
        return this;
    }
}