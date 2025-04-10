export class Assertions {

    public static assertProperties(element: any, properties: string, expectedProperties: string): void {
        element.assertProperties(properties, expectedProperties)
    }

    public static assertTrimmedProperties(element: any, properties: string, expectedProperties: string): void {
        element.assertTrimmedProperties(properties, expectedProperties)
    }

    public static assertPropertiesByShould(element: any, expectedProperties: string): void {
        element.invoke('text').then((text: string) => {
            const cleanedText = text.replace(/&nbsp;/g, '').replace(/\s+/g, ' ').trim();
            expect(cleanedText).to.include(expectedProperties);
        })
    }
}