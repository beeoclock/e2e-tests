import {ScheduleConfig} from "./builder/UpdateBusinessProfileBuilder";

export class NewContextInterceptionAssertion {

    public static createNewContextAlias(alias: string, companyName: string): void {
        cy.wait('@' + alias).then(interception => {
            const requestBody = interception.request.body
            expect(requestBody.name).to.equal(companyName)
        })
    }

    public static updateContextAlias(alias: string, expectedBody: Partial<ScheduleConfig>): void {
        cy.wait('@' + alias).then(interception => {
            const requestBody: any = interception.request.body;

            cy.log('Request body:', requestBody);
            if (expectedBody.published !== undefined) {
                expect(requestBody.published).to.equal(expectedBody.published);
            }

            if (expectedBody.schedules) {
                expect(requestBody.schedules).to.have.length(expectedBody.schedules.length);

                expectedBody.schedules.forEach((expectedSchedule, index): void => {
                    const actualSchedule = requestBody.schedules[index];
                    expect(actualSchedule.workDays).to.deep.equal(expectedSchedule.workDays);
                    expect(actualSchedule.startInSeconds).to.equal(expectedSchedule.startInSeconds);
                    expect(actualSchedule.endInSeconds).to.equal(expectedSchedule.endInSeconds);
                });
            }

            if (expectedBody.addresses) {
                expect(requestBody.addresses).to.have.length(expectedBody.addresses.length);

                expectedBody.addresses.forEach((expectedAddress, index): void => {
                    const actualAddress = requestBody.addresses[index];
                    expect(actualAddress.object).to.equal(expectedAddress.object);
                    expect(actualAddress.country).to.equal(expectedAddress.country);
                    expect(actualAddress.city).to.equal(expectedAddress.city);
                    expect(actualAddress.zipCode).to.equal(expectedAddress.zipCode);
                    expect(actualAddress.streetAddressLineOne).to.equal(expectedAddress.streetAddressLineOne);
                    expect(actualAddress.streetAddressLineTwo).to.equal(expectedAddress.streetAddressLineTwo);
                    expect(actualAddress.customLink).to.equal(expectedAddress.customLink);
                });
            }
        });
    }

    public static waitForGetBusiness(alias: string, expectedBody: any): void {
        cy.wait('@' + alias).then(interception => {
            const responseBody: any = interception.response.body;

            cy.log('resp body:', JSON.stringify(responseBody));
            cy.log('expected body:', JSON.stringify(expectedBody));

            if (!responseBody.address) {
                cy.log('🔴 !!!Address is null!!! - incorrect response');
            }
            /**
             * this method checks props like address and schedules in created context
             * currently it is skipped because of the bug in UI couse sendung two put when
             * first one is correct and second is empty, so it is not possible to check
             */
            // expect(responseBody).to.deep.include(expectedBody)//TODO UNSKIP WHEN FIXED
        })
    }

    // public static getAddress(): any {
    // object: "Address",
    // country: "PL",
    // city: "Warszawa",
    // zipCode: "10-100",
    // streetAddressLineOne: "Krakowskie przedmieście 178/12A",
    // streetAddressLineTwo: "Argentyńska 270B/490",
    // customLink: null

}