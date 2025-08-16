import {Assertions} from "../../page-element/configuration/tab/common/assertions/Assertions";

export class AssertionsHelper {

    /**
     * Porównuje cały outerHTML elementu z oczekiwanym snapshotem
     */
    public static assertOuterHtmlSnapshot(
        element: Cypress.Chainable<JQuery<HTMLElement>>,
        expectedHtml: string
    ): void {
        Assertions.assertTrimmedProperties(element, "outerHTML", expectedHtml);
    }

    /**
     * Porównuje innerText elementu z oczekiwanym snapshotem
     */
    public static assertTextSnapshot(
        element: Cypress.Chainable<JQuery<HTMLElement>>,
        expectedText: string
    ): void {
        Assertions.assertTrimmedProperties(element, "innerText", expectedText);
    }

    /**
     * Porównuje wybrane atrybuty elementu
     */
    public static assertAttributeSnapshot(
        element: Cypress.Chainable<JQuery<HTMLElement>>,
        attributeName: string,
        expectedValue: string
    ): void {
        Assertions.assertTrimmedProperties(element, attributeName, expectedValue);
    }

    /**
     * Porównuje wiele atrybutów na raz
     */
    public static assertMultipleAttributesSnapshot(
        element: Cypress.Chainable<JQuery<HTMLElement>>,
        expected: Record<string, string>
    ): void {
        Object.entries(expected).forEach(([attr, value]) => {
            Assertions.assertTrimmedProperties(element, attr, value);
        });
    }
}
