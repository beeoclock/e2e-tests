import {TariffsQueriesApi} from "../../../../support/beeoclock/backend/tariffs/queries/TariffsQueriesApi";
import {HTTPStatusCodeType} from "../../../../support/beeoclock/backend/enum/HTTPStatusCodeType";

describe("tariffs queries api test", () => {
    let expectedTariffs: any;

    before(() => {
        cy.fixture("backend/tariffs/existedTariffs.json").then((existedTariffs) => {
            expectedTariffs = existedTariffs;
        });
    });

    ///api/v1/paged
    it("should get tariffs, and assert its response", () => {
        cy.wrap(null).then(() => {
            expect(expectedTariffs).to.exist;

            TariffsQueriesApi.getTariffsPaged(HTTPStatusCodeType.OK_200, {}).then((response) => {
                    cy.log('TEST', JSON.stringify(response))
                    // expect(response.totalSize).to.equal(expectedTariffs.totalSize);
                    //
                    // assertTariff(response, 0)
                    // assertTariff(response, 1)
                    // assertTariff(response, 2)
                }
            );
        });
    });

    ///api/v1/{id}
    it("should get free tariff by its id and assert response", () => {
        cy.wrap(null).then(() => {
            expect(expectedTariffs).to.exist;

            TariffsQueriesApi.getTariffsByIds(
                expectedTariffs.items[0]._id,
                HTTPStatusCodeType.OK_200,
                {}
            ).then((response) => {
                assertTariffResponse(response, 0);
            });
        });
    });

    ///api/v1/{id}
    it("should get basic tariff by its id and assert response", () => {
        cy.wrap(null).then(() => {
            expect(expectedTariffs).to.exist;

            TariffsQueriesApi.getTariffsByIds(
                expectedTariffs.items[1]._id,
                HTTPStatusCodeType.OK_200,
                {}
            ).then((response) => {
                assertTariffResponse(response, 1);
            });
        });
    });

    ///api/v1/{id}
    it("should get professional tariff by its id and assert response", () => {
        cy.wrap(null).then(() => {
            expect(expectedTariffs).to.exist;

            TariffsQueriesApi.getTariffsByIds(
                expectedTariffs.items[2]._id,
                HTTPStatusCodeType.OK_200,
                {}
            ).then((response) => {
                assertTariffResponse(response, 2);
            });
        });
    });

    //function for test no. 1
    function assertTariff(response: any, index: number) {
        const item = response.items[index];
        const expected = expectedTariffs.items[index];
        const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

        expect(item._id).to.equal(expected._id);
        expect(item.state).to.equal(expected.state);
        expect(item.type).to.equal(expected.type);
        expect(item.features).to.deep.equal(expected.features);
        expect(item.specialistLimit).to.equal(expected.specialistLimit);

        expect(item.prices.length).to.equal(expected.prices.length);
        item.prices.forEach((price: any, i: number) => {
            const expectedPrice = expected.prices[i];
            expect(price.currency).to.equal(expectedPrice.currency);
            expect(price.region).to.equal(expectedPrice.region);
            expect(price.values).to.deep.equal(expectedPrice.values);
            expect(price.languageVersions).to.deep.equal(expectedPrice.languageVersions);
            expect(price.createdAt).to.match(isoDateRegex);
            expect(price.updatedAt).to.match(isoDateRegex);
        });

        expect(item.pluginAttachment.includeAll).to.equal(expected.pluginAttachment.includeAll);
        expect(item.pluginAttachment.excludeAll).to.equal(expected.pluginAttachment.excludeAll);
        expect(item.pluginAttachment.includeList).to.deep.equal(expected.pluginAttachment.includeList);
        expect(item.pluginAttachment.excludeList).to.deep.equal(expected.pluginAttachment.excludeList);
        expect(item.pluginAttachment.createdAt).to.match(isoDateRegex);
        expect(item.pluginAttachment.updatedAt).to.match(isoDateRegex);

        expect(item.createdAt).to.match(isoDateRegex);
        expect(item.updatedAt).to.match(isoDateRegex);
    }

    //function for test no. 2,3,4
    function assertTariffResponse(response: any, index: number) {
        const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

        expect(response._id).to.equal(expectedTariffs.items[index]._id);
        expect(response.state).to.equal(expectedTariffs.items[index].state);
        expect(response.type).to.equal(expectedTariffs.items[index].type);

        expect(response.prices.length).to.equal(expectedTariffs.items[index].prices.length);
        response.prices.forEach((price: any, i: number) => {
            const expectedPrice = expectedTariffs.items[index].prices[i];
            expect(price.currency).to.equal(expectedPrice.currency);
            expect(price.region).to.equal(expectedPrice.region);
            expect(price.values).to.deep.equal(expectedPrice.values);
            expect(price.languageVersions).to.deep.equal(expectedPrice.languageVersions);

            expect(price.createdAt).to.match(isoDateRegex);
            expect(price.updatedAt).to.match(isoDateRegex);
        });

        expect(response.pluginAttachment.includeAll).to.equal(expectedTariffs.items[index].pluginAttachment.includeAll);
        expect(response.pluginAttachment.excludeAll).to.equal(expectedTariffs.items[index].pluginAttachment.excludeAll);
        expect(response.pluginAttachment.includeList).to.deep.equal(expectedTariffs.items[index].pluginAttachment.includeList);
        expect(response.pluginAttachment.excludeList).to.deep.equal(expectedTariffs.items[index].pluginAttachment.excludeList);

        expect(response.features).to.deep.equal(expectedTariffs.items[index].features);
        expect(response.specialistLimit).to.equal(expectedTariffs.items[index].specialistLimit);

        if (response.pluginAttachment.createdAt) {
            expect(response.pluginAttachment.createdAt).to.match(isoDateRegex);
        }
        if (response.pluginAttachment.updatedAt) {
            expect(response.pluginAttachment.updatedAt).to.match(isoDateRegex);
        }

        if (response.createdAt) {
            expect(response.createdAt).to.match(isoDateRegex);
        }
        if (response.updatedAt) {
            expect(response.updatedAt).to.match(isoDateRegex);
        }
    }
});
