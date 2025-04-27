import {OrderEditionFormPageElement} from "./OrderEditionFormPageElement";
import {SpecialistNameEnum} from "../../../../common/enum/SpecialistNameEnum";

export class OrderEditionFormPage {

    //specialist
    public clickSpecialistButton(orderId: string): OrderEditionFormPage {
        OrderEditionFormPageElement.SelectSpecialistButton
            .getElement(orderId)
            .click()
        return this;
    }

    public verifyOrderSpecialist(orderId: string, specialist: SpecialistNameEnum): OrderEditionFormPage {
        OrderEditionFormPageElement.SelectSpecialistButton
            .getElement(orderId)
            .should('have.prop', 'textContent').and('include', specialist)
        return this;
    }

    public clickSelectSpecialist(specialist: SpecialistNameEnum, sendEmail?: boolean): OrderEditionFormPage {
        OrderEditionFormPageElement.SelectGivenSpecialist
            .getElement(specialist)
            .click().then(() => {
            // NotificationsPage.handleEmailNotificationsToggle(sendEmail)
        })
        return this;
    }

    //customer
    public clickCustomerButton(orderId: string): OrderEditionFormPage {
        OrderEditionFormPageElement.OrderCustomerButton
            .getElement(orderId)
            .click()
        return this;
    }

    public verifySelectCustomer(orderId: string, customer: string): OrderEditionFormPage {
        OrderEditionFormPageElement.OrderCustomerButton
            .getElement(orderId)
            .should('have.prop', 'innerText').and('include', customer)
        return this
    }

    //price
    public clickOrderPriceComponent(orderId: string): OrderEditionFormPage {
        OrderEditionFormPageElement.OrderPriceComponent.getElement(orderId)
            .click()
        return this
    }

    public assertPrice(orderId: string, price: string): OrderEditionFormPage {
        OrderEditionFormPageElement.OrderPriceComponent.getElement(orderId)
            .invoke('prop', 'innerText').then((innerText) => {
            const normalizedText = innerText.replace(/\s/g, '');
            const normalizedPrice = price.replace(/\s/g, '');
            expect(normalizedText).to.include(normalizedPrice);
        })
        return this;
    }

}