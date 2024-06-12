import {values} from "cypress/types/lodash";
import {BookingClientDataPageElement} from "./BookingClientDataPageElement";


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
        if (comment) {
            BookingClientDataPageElement.CommentInput.getElement()
                .type(comment).then(() => {
                BookingClientDataPageElement.CommentInput.getElement().invoke('prop', 'value').then(value => {
                    expect(value).to.contain(comment)
                })
            })
        }
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

    public verifySelectedService(service: string): BookingClientDataPage {
        BookingClientDataPageElement.SelectedService.getElement()
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedValue = service.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedValue);
            });
        return this;
    }

    public verifySelectedServicePrice(price: string): BookingClientDataPage {
        BookingClientDataPageElement.ServicePrice.getElement()
            .invoke('prop', 'outerText')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = price.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public verifySelectedServiceTime(time: string): BookingClientDataPage {
        BookingClientDataPageElement.ServiceTime.getElement()
            .invoke('prop', 'outerText')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = time.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }


    public verifyServiceSpecialist(specialist: string): BookingClientDataPage {
        BookingClientDataPageElement.ServiceSpecialist.getElement()
            .invoke('prop', 'outerText')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = specialist.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public verifySummaryPriceValue(value: string): BookingClientDataPage {
        BookingClientDataPageElement.SummaryPriceValue.getElement()
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedValue = value.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedValue);
            });
        return this;
    }
}