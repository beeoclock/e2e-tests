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
            const requestBody = interception.request.body;

            if (expectedBody.published !== undefined) {
                expect(requestBody.published).to.equal(expectedBody.published);
            }

            if (expectedBody.schedules) {
                expect(requestBody.schedules).to.have.length(expectedBody.schedules.length);

                expectedBody.schedules.forEach((expectedSchedule, index) => {
                    const actualSchedule = requestBody.schedules[index];
                    expect(actualSchedule.workDays).to.deep.equal(expectedSchedule.workDays);
                    expect(actualSchedule.startInSeconds).to.equal(expectedSchedule.startInSeconds);
                    expect(actualSchedule.endInSeconds).to.equal(expectedSchedule.endInSeconds);
                });
            }

            if (expectedBody.addresses) {
                expect(requestBody.addresses).to.have.length(expectedBody.addresses.length);

                expectedBody.addresses.forEach((expectedAddress, index) => {
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
}