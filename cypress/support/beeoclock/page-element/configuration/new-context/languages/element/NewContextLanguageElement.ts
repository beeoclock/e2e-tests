export class NewContextLanguageElement {

    public getSelectLanguagesElement(): any {
        return cy.get(this.getSelectLanguagesSelector());
    }

    public getMainLanguageElement(): any {
        return cy.get(this.getMainLanguageSelector());
    }

    public getEmailElement(): any {
        return cy.get(this.getEmailSelector());
    }

    public getTimezoneElement(): any {
        return cy.get(this.getTimezoneSelector());
    }

    public getCurrencyElement(): any {
        return cy.get(this.getCurrencySelector());
    }

    public getSelectLanguagesSelector(): string {
        return 'client-available-languages-business-settings-component';
    }

    public getMainLanguageSelector(): string {
        return 'client-base-language-business-settings-component';
    }

    public getEmailSelector(): string {
        return 'client-email-language-business-settings-component';
    }

    public getTimezoneSelector(): string {
        return 'client-booking-settings-time-zone-component';
    }

    public getCurrencySelector(): string {
        return 'app-client-base-currency-business-settings-component';
    }
}
