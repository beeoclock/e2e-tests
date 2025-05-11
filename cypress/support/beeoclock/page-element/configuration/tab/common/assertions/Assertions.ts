export class Assertions {

    public static assertProperties(element: any, properties: string, expectedProperties: string): void {
        element.assertProperties(properties, expectedProperties)
    }

    public static assertTrimmedProperties(element: any, properties: string, expectedProperties: string): void {
        element.assertTrimmedProperties(properties, expectedProperties)
    }

    public static waitUntilDomAndAppIsReady(): void {
        cy.log('Waiting for DOM readyState = complete');
        cy.waitUntil(() =>
                cy.document().its('readyState').then(state => state === 'complete'),
            {
                timeout: 10000,
                interval: 500,
                errorMsg: `DOM did not reach readyState "complete" within 10000 ms`
            });

        cy.log('Waiting for application main container to be visible');
        cy.get('tenant-router-outlet-component', { timeout: 10000 }).should('be.visible');

        cy.log('DOM and Application are ready.');
    }

    public static assertPropertiesByShould(element: any, expectedProperties: string): void {
        element.invoke('text').then((text: string) => {
            const cleanedText = text.replace(/&nbsp;/g, '').replace(/\s+/g, ' ').trim();
            expect(cleanedText).to.include(expectedProperties);
        })
    }
}