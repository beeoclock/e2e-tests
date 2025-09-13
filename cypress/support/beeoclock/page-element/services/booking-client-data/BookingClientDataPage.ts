import {BookingClientDataPageElement} from "./BookingClientDataPageElement";


export class BookingClientDataPage {

    public typeFirstName(firstName: string): BookingClientDataPage {
        cy.get('cart-details-component').should('be.visible');
        this.verifyFirstNameLabel()
        BookingClientDataPageElement.FirstNameInput.getElement()
            .clear()
            .type(firstName).then((): void => {
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
            .type(email).then((): void => {
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
            .type(phoneNumber).then((): void => {
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
                .type(comment).then((): void => {
                BookingClientDataPageElement.CommentInput.getElement().invoke('prop', 'value').then(value => {
                    expect(value).to.equals(comment)
                })
            })
        }
        return this;
    }

    public checkAgreement(): BookingClientDataPage {
        this.assertAgreementsHref()
        BookingClientDataPageElement.Agreement0InputElement.getElement().check({force: true})
            .should('be.checked');
        return this;
    }

    private assertAgreementsHref(): BookingClientDataPage {
        const termsOfUse: Cypress.Chainable<JQuery<HTMLAnchorElement>> = cy.contains('a', 'Warunki korzystania')
        const privacyPolicy: Cypress.Chainable<JQuery<HTMLAnchorElement>> = cy.contains('a', 'Politykę prywatności')

        termsOfUse.should('be.visible')
        termsOfUse.should('have.attr', 'href')
            .and('include', 'https://bee-o-clock.gitbook.io/home')

        privacyPolicy.should('be.visible')
        privacyPolicy.should('have.attr', 'href')
            .and('include', 'https://bee-o-clock.gitbook.io/home')
        return this;
    }

    public verifySelectedService(service: string): BookingClientDataPage {
        BookingClientDataPageElement.SelectedService.getSelectedServiceName(service)
            .invoke('text')
            .then((text): void => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedValue = service.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedValue);
            });
        return this;
    }

    public verifySelectedServiceOnSummary(service: string): BookingClientDataPage {
        BookingClientDataPageElement.SelectedService.getSelectedServiceName(service)
            .invoke('text')
            .then((text): void => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedValue = service.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedValue);
            });
        return this;
    }

    public verifySelectedServicePrice(price: string): BookingClientDataPage {
        BookingClientDataPageElement.SelectedService.getSelectedServicePrice(price)
            .invoke('prop', 'outerText')
            .then((text): void => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = price.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public verifySelectedServiceTime(time: string): BookingClientDataPage {
        BookingClientDataPageElement.SelectedService.getSelectedServiceTime(time)
            .invoke('prop', 'outerText')
            .then((text): void => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = time.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public verifyServiceSpecialist(specialist: string): BookingClientDataPage {
        BookingClientDataPageElement.ServiceSpecialist.getElement(specialist)
            .invoke('prop', 'outerText')
            .then((text): void => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = specialist.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public verifySummaryPriceValue(value: string): BookingClientDataPage {
        BookingClientDataPageElement.SummaryPriceValue.getElement()
            .invoke('text')
            .then((text): void => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedValue = value.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedValue);
            });
        return this;
    }

    public verifyPhonePrefix(prefix: string): BookingClientDataPage {
        const element = BookingClientDataPageElement.PhonePrefixElement
        // if (!element.getElement().contains('+1')) {
        element.getElement().click().then((): void => {
            cy.get('[placeholder="Search"]').type('Poland')
            cy.contains('li', 'Poland').click()
        })
        // }
        cy.wait(100)
        element.getElement().should('have.prop', 'textContent').and('include', prefix)
        return this;
    }

    public verifySelectServicesHeader(): BookingClientDataPage {
        cy.contains('div', 'Zamówione usługi').should('be.visible')
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
}
