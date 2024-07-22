import {values} from "cypress/types/lodash";
import {BookingClientDataPageElement} from "./BookingClientDataPageElement";


export class BookingClientDataPage {

    public typeFirstName(firstName: string): BookingClientDataPage {
        this.verifyFirstNameLabel()
        BookingClientDataPageElement.FirstNameInput.getElement()
            .clear()
            .type(firstName).then(() => {
            BookingClientDataPageElement.FirstNameInput.getElement().invoke('prop', 'value').then(value => {
                expect(value).to.equals(firstName)
            })
        })
        return this;
    }

    public typeEmail(email: string): BookingClientDataPage {
        this.verifyEmailLabel()
        BookingClientDataPageElement.EmailInput.getElement()
            .clear()
            .type(email).then(() => {
            BookingClientDataPageElement.EmailInput.getElement().invoke('prop', 'value').then(value => {
                expect(value).to.equals(email)
            })
        })
        return this;
    }

    public typePhoneNumber(phoneNumber: string): BookingClientDataPage {
        this.verifyPhonePrefix("Poland +48")
        BookingClientDataPageElement.PhoneInput.getElement()
            .clear()
            .type(phoneNumber).then(() => {
            BookingClientDataPageElement.PhoneInput.getElement().invoke('prop', 'value').then(value => {
                const trimmedValue = value.replace(/\D/g, '');
                const trimmedPhoneNumber = phoneNumber.replace(/\D/g, '');
                expect(trimmedValue).to.equals(trimmedPhoneNumber);
            });
        });
        return this;
    }

    public typeComment(comment: string): BookingClientDataPage {
        if (comment) {
            BookingClientDataPageElement.CommentInput.getElement()
                .clear()
                .type(comment).then(() => {
                BookingClientDataPageElement.CommentInput.getElement().invoke('prop', 'value').then(value => {
                    expect(value).to.equals(comment)
                })
            })
        }
        return this;
    }

    public checkAgreement(): BookingClientDataPage {
        BookingClientDataPageElement.Agreement0InputElement.getElement().check({ force: true })
            .should('be.checked');
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
        BookingClientDataPageElement.PhoneInput.getElement().parents('label').first().contains('Telefon');
        return this;
    }

    public verifySelectedService(service: string): BookingClientDataPage {
        BookingClientDataPageElement.SelectedService.getElement(service)
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedValue = service.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedValue);
            });
        return this;
    }

    public verifySelectedServicePrice(price: string): BookingClientDataPage {
        BookingClientDataPageElement.ServicePrice.getElement(price)
            .invoke('prop', 'outerText')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = price.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public verifySelectedServiceTime(time: string): BookingClientDataPage {
        BookingClientDataPageElement.ServiceTime.getElement(time)
            .invoke('prop', 'outerText')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = time.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public verifyServiceSpecialist(specialist: string): BookingClientDataPage {
        BookingClientDataPageElement.ServiceSpecialist.getElement(specialist)
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

    public verifyPhonePrefix(prefix: string): BookingClientDataPage {
        BookingClientDataPageElement.PhonePrefixElement.getElement()
            .should('have.prop', 'textContent').and('include', prefix)
        return this;
    }
    public verifySelectServicesHeader(): BookingClientDataPage {
        cy.contains('div', 'Zamówione usługi').should('be.visible')
        return this;
    }
}
