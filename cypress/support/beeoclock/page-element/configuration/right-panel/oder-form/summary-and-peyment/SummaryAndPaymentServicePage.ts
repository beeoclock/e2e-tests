import {SummaryAndPaymentServicePageElement} from "./SummaryAndPaymentServicePageElement";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";
import {NotificationsPage} from "../../../notiifcations/NotificationsPage";
import {LeftMenuPage} from "../../../left-menu/LeftMenuPage";

export class SummaryAndPaymentServicePage {

    public verifyOrderPrice(price: string): SummaryAndPaymentServicePage {
        SummaryAndPaymentServicePageElement.OrderSummaryPriceElement.getElement()
            .invoke('prop', 'outerText')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = price.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public verifyOrderTime(price: string): SummaryAndPaymentServicePage {
        SummaryAndPaymentServicePageElement.OrderSummaryTimeElement.getElement()
            .invoke('prop', 'outerText')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = price.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public verifyOrderDate(date: string): SummaryAndPaymentServicePage {
        SummaryAndPaymentServicePageElement.OrderSummaryDateElement.getElement()
            .invoke('prop', 'outerText')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = date.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public verifyOrderService(service: string): SummaryAndPaymentServicePage {
        SummaryAndPaymentServicePageElement.OrderSummarySelectedServiceElement.getElement()
            .invoke('prop', 'outerText')
            .then((text) => {
                const cleanedText = text.replace(/\s+/g, ' ').trim();
                const cleanedService = service.replace(/\s+/g, ' ').trim();
                expect(cleanedText).to.include(cleanedService);
            });
        return this;
    }

    public verifyOrderSpecialist(specialist: string): SummaryAndPaymentServicePage {
        SummaryAndPaymentServicePageElement.OrderSummarySpecialistElement.getElement()
            .invoke('prop', 'textContent')
            .then((text) => {
                expect(text).to.include(specialist);
            });
        return this;
    }

    public verifyOrderCustomer(customer: string): SummaryAndPaymentServicePage {
        SummaryAndPaymentServicePageElement.OrderCustomerSummaryElement.getElement()
            .invoke('prop', 'textContent')
            .then((text) => {
                expect(text).to.include(customer);
            });
        return this;
    }

    public selectPaymentMethod(method: string): SummaryAndPaymentServicePage {
        SummaryAndPaymentServicePageElement.PaymentMethodSelector.getElement()
            .click().then(() => {
            SummaryAndPaymentServicePageElement.SelectPaymentMethodElement.getElement(method)
                .click()
        })
        return this;
    }

    public selectPaymentStatus(status: string): SummaryAndPaymentServicePage {
        SummaryAndPaymentServicePageElement.PaymentStatusSelector.getElement()
            .click().then(() => {
            SummaryAndPaymentServicePageElement.SelectPaymentStatusElement.getElement(status)
                .click()
        })
        return this;
    }

    public typeBusinessNote(businessNote: string): SummaryAndPaymentServicePage {
        SummaryAndPaymentServicePageElement.BusinessNoteInputElement.getElement()
            .type(businessNote)
        return this;
    }

    public clickSaveButton(paymentStatus: string): SummaryAndPaymentServicePage {
        const createOrder = ApiInterceptionHelper.createOrder()
        const createPayment = ApiInterceptionHelper.createServicePayment()
        LeftMenuPage.assertIsSynchronized(true)
        SummaryAndPaymentServicePageElement.SaveButton.getElement()
            .click()
            .then(() => {
                LeftMenuPage.assertIsSynchronized(true)
                NotificationsPage.clickConfirmButton()
                    cy.wait(500)//TODO TEMP!
                    cy.wait('@' + createOrder, {timeout: 20000}).then((interception) => {
                        const request = interception.request.body;
                        cy.log('ID: ', request._id)

                        const orderId = request._id;
                        cy.wrap(orderId).as('orderId');
                    })
                cy.wait('@' + createPayment, {timeout: 20000}).then((interception) => {
                    const sendPaymentStatus = interception.request.body.status;
                    expect(sendPaymentStatus).to.equal(paymentStatus);

                })

                    LeftMenuPage.assertIsSynchronized(true)
            })
        return this;
    }

    public clickDeleteByDashIcon(): SummaryAndPaymentServicePage {
        const icon = cy.get('app-item-list-v2-service-form-order-component')
            .find('.bi.bi-dash-circle').scrollIntoView().should('be.visible')

        const btn = icon.parent('button')
        btn.scrollIntoView().should('be.visible')

        btn.click()
            .then(() => {
                cy.get('.alert-wrapper')
                    .scrollIntoView().should('be.visible')
                    .invoke('prop', 'innerText')
                    .then(alertText => {

                        expect(alertText).to.include("Usuwanie zamówionej usługi");
                        expect(alertText).to.include("Usunięcie ostatnio zamówionej usługi powoduje automatyczne usunięcie samego zamówienia.");
                        expect(alertText).to.include("Czy naprawdę chcesz usunąć zamówioną usługę?");
                        expect(alertText).to.include("Anuluj");
                        expect(alertText).to.include("Usuń");
                    });

                cy.contains('button', 'Usuń').scrollIntoView().should('be.visible')
                    .click();
                LeftMenuPage.assertIsSynchronized(true)
            })
        return this;
    }
}
