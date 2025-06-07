export class SelectorHelper {

    public static getElementById(id: string) {
        return document.getElementById(id);
    }

    public static getElementByPhare(phrase: string) {
        return cy.contains(phrase);
    }
}