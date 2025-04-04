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
                    // cy.log('TEST', JSON.stringify(response))
                    expect(response.totalSize).to.equal(expectedTariffs.totalSize);

                    assertTariff(response, 0)
                    assertTariff(response, 1)
                    assertTariff(response, 2)
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
        expect(response.items[index]._id).to.equal(expectedTariffs.items[index]._id);
        expect(response.items[index].state).to.equal(expectedTariffs.items[index].state);
        expect(response.items[index].type).to.equal(expectedTariffs.items[index].type);
        expect(response.items[index].prices).to.deep.equal(expectedTariffs.items[index].prices);
        expect(response.items[index].pluginAttachment).to.deep.equal(expectedTariffs.items[index].pluginAttachment);
        expect(response.items[index].features).to.deep.equal(expectedTariffs.items[index].features);
        expect(response.items[index].specialistLimit).to.equal(expectedTariffs.items[index].specialistLimit);
        expect(response.items[index].pluginAttachment.includeAll).to.equal(expectedTariffs.items[index].pluginAttachment.includeAll);
        expect(response.items[index].pluginAttachment.excludeAll).to.equal(expectedTariffs.items[index].pluginAttachment.excludeAll);
        expect(response.items[index].pluginAttachment.includeList).to.deep.equal(expectedTariffs.items[index].pluginAttachment.includeList);
        expect(response.items[index].pluginAttachment.excludeList).to.deep.equal(expectedTariffs.items[index].pluginAttachment.excludeList);
    }

    //function for test no. 2,3,4
    function assertTariffResponse(response: any, index: number) {
        expect(response._id).to.equal(expectedTariffs.items[index]._id);
        expect(response.state).to.equal(expectedTariffs.items[index].state);
        expect(response.type).to.equal(expectedTariffs.items[index].type);
        expect(response.prices).to.deep.equal(expectedTariffs.items[index].prices);
        expect(response.pluginAttachment).to.deep.equal(expectedTariffs.items[index].pluginAttachment);
        expect(response.features).to.deep.equal(expectedTariffs.items[index].features);
        expect(response.specialistLimit).to.equal(expectedTariffs.items[index].specialistLimit);
        expect(response.pluginAttachment.includeAll).to.equal(expectedTariffs.items[index].pluginAttachment.includeAll);
        expect(response.pluginAttachment.excludeAll).to.equal(expectedTariffs.items[index].pluginAttachment.excludeAll);
        expect(response.pluginAttachment.includeList).to.deep.equal(expectedTariffs.items[index].pluginAttachment.includeList);
        expect(response.pluginAttachment.excludeList).to.deep.equal(expectedTariffs.items[index].pluginAttachment.excludeList);
    }
});
