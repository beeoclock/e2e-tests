import {indexDBNames} from "support/beeoclock/common/assertion/index-db/IndexDBNames";
import {IndexDbHandler} from "support/beeoclock/common/assertion/index-db/IndexDbHandler";

describe('index-db-test', (): void => {
    it('should do something', (): void => {
        cy.loginOnPanel()

        // cy.window().then((win): void => {
        //     const dbName = BackendCommonEnum.X_Business_Tenant_Id + "-order";
        //     return IndexDbHandler.openDatabase(dbName).then((db): void => {
        //         return IndexDbHandler.getObjectById(db, "662bf257aa34c577680dece6");
        //     });
        // }).then((order): void => {
        //     cy.log("📌 Znaleziony obiekt:", order);
        //     console.log("🖥️ Znaleziony obiekt:", order);
        //     cy.log("🔑 Wartość klucza `createdAt`:", order.createdAt);
        //     cy.log("🔑 Wartość klucza `status`:", order.status);
        //
        //     expect(order).to.exist;
        //     expect(order._id).to.equal("662bf257aa34c577680dece6");
        // });


        cy.window().then((win): any => {

            return IndexDbHandler.openDatabase(indexDBNames.order_db).then((db): any => {
                return IndexDbHandler.getLastElementByCreatedAt(db, "items", "createdAt");
            });
        }).then((lastElement): void => {
            cy.log("📌 Ostatni element:", JSON.stringify(lastElement));

            expect(lastElement).to.exist;
            expect(lastElement._id).to.exist;
        });


    })
})
