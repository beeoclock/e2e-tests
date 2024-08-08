import {CustomerTypeEnum} from "../enum/CustomerTypeEnum";

export class SelectSpecificCustomerOption {
    public getElement(customer: string, eq: number): any {
        return cy.get('app-customer-list-ionic-component')
            .find('ion-header')
            .find('ion-toolbar')
            .find('ion-segment')
            .find('ion-segment-button').eq(eq)
            .find('button')
    }
}