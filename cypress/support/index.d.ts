import {ThrottleEnum} from "./beeoclock/common/enum/ThrottleEnum";

declare namespace Cypress {
    interface Chainable<Subject = any> {
        loginOnPanel(): void;

        loginOnPublicPage(): void;

        loginOnProductPanel(): void;

        setNetworkThrottle(speed: ThrottleEnum): void;

        assertProperties(properties: string, expectedProperties: string): Chainable<JQuery>;
        assertElementTextNormalized(expectedProperties: string): Chainable<JQuery>;
        assertElementText(expectedProperties: string): Chainable<JQuery>;

        assertTrimmedProperties(properties: string, expectedProperties: string): Chainable<JQuery>;

        isNotInViewport(): Chainable<JQuery>;

        isInViewport(): Chainable<JQuery>;

        token()
    }
}
