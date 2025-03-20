export class Assertions {

    public static assertProperties(element: any, properties: string, expectedProperties: string): void {
        element.assertProperties(properties, expectedProperties)
    }
}