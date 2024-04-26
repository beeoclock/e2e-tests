import { values } from "cypress/types/lodash";
import { BookingClientDataPageElement } from "./BookingClientDataPageElement";


export class BookingClientDataPage {

    public typeFirstName(firstName: string): BookingClientDataPage {
        this.verifyFirstNameLabel()
        BookingClientDataPageElement.FirstNameInput.getElement()
            .type(firstName).then(() => {
                BookingClientDataPageElement.FirstNameInput.getElement().invoke('prop', 'value').then(value => {
                    expect(value).to.contain(firstName)
                })
            })
        return this;
    }

    public typeEmail(email: string): BookingClientDataPage {
        this.verifyEmailLabel()
        BookingClientDataPageElement.EmailInput.getElement()
            .type(email).then(() => {
                BookingClientDataPageElement.EmailInput.getElement().invoke('prop', 'value').then(value => {
                    expect(value).to.contain(email)
                })
            })
        return this;
    }

    public typePhoneNumber(phoneNumber: string): BookingClientDataPage {
        this.verifyPhoneNumberLabel()
        BookingClientDataPageElement.PhoneInput.getElement()
            .type(phoneNumber).then(() => {
                BookingClientDataPageElement.PhoneInput.getElement().invoke('prop', 'value').then(value => {
                    expect(value).to.contain(phoneNumber)
                })
            })
        return this;
    }

    public typeComment(comment: string): BookingClientDataPage {
        BookingClientDataPageElement.CommentInput.getElement()
            .type(comment).then(() => {
                BookingClientDataPageElement.CommentInput.getElement().invoke('prop', 'value').then(value => {
                    expect(value).to.contain(comment)
                })
            })
        return this;
    }

    private verifyFirstNameLabel(): BookingClientDataPage {
        BookingClientDataPageElement.FirstNameInput.getElement().parent().find('label').contains('Imię');
        return this;
    }

    private verifyEmailLabel(): BookingClientDataPage {
        BookingClientDataPageElement.EmailInput.getElement().parent().find('label').contains('E-mail');
        return this;
    }

    private verifyPhoneNumberLabel(): BookingClientDataPage {
        BookingClientDataPageElement.PhoneInput.getElement().parent().find('label').contains('Telefon');
        return this;
    }
}