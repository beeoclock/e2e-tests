import {BusinessProfileApi} from "../../../support/beeoclock/backend/panel/business-profile/BusinessProfileApi";
import {HTTPStatusCodeType} from "../../../support/beeoclock/backend/enum/HTTPStatusCodeType";
import {BackendCommonEnum} from "../../../support/beeoclock/backend/enum/BackendCommonEnum";
import {IdentityApi} from "../../../support/beeoclock/backend/identity/IdentityApi";
import {IdentityData} from "../../../support/beeoclock/backend/identity/enum/IdentityResponse";
import {AnalyticApi} from "../../../support/beeoclock/backend/panel/analytic/AnalyticApi";
import {ProductApi} from "../../../support/beeoclock/backend/panel/product/ProductApi";
import {ProductTagBuilder} from "../../../support/beeoclock/backend/panel/product/tag/ProductTagBuilder";
import {NumericUtils} from "../../../support/beeoclock/backend/Utils/NumericUtils";
import {faker} from "@faker-js/faker";
import {AuthApi} from "../../../support/beeoclock/backend/auth/AuthApi";

describe("panel api healthcheck", () => {
    let token: string

    before('get token', () => {
       token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjMwYjIyMWFiNjU2MTdiY2Y4N2VlMGY4NDYyZjc0ZTM2NTIyY2EyZTQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUGlvdHIga293YWxza2kiLCJhY2NvdW50SWQiOiI2NjJhNDM2NGE0YjM3NmQyMGMwNjViMTIiLCJmcm9udGVuZFNldHRpbmdzIjp7ImJ1c2luZXNzUGFuZWwiOnsibGFuZ3VhZ2UiOiJlbiJ9fSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2JlZW9jbG9jay1kZXZlbG9wIiwiYXVkIjoiYmVlb2Nsb2NrLWRldmVsb3AiLCJhdXRoX3RpbWUiOjE3NDMwMTEyNTIsInVzZXJfaWQiOiJ1bDVKSVdZVTdPWG9OTEwwajYxM0hBQVBoejkyIiwic3ViIjoidWw1SklXWVU3T1hvTkxMMGo2MTNIQUFQaHo5MiIsImlhdCI6MTc0MzAxMTI1MiwiZXhwIjoxNzQzMDE0ODUyLCJlbWFpbCI6ImUyZS50ZXN0aW5nQGRldi5iZWVvY2xvY2suY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBob25lX251bWJlciI6Iis0ODEyMzMzMzMzMiIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZTJlLnRlc3RpbmdAZGV2LmJlZW9jbG9jay5jb20iXSwicGhvbmUiOlsiKzQ4MTIzMzMzMzMyIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.hezmvufO4MaFevgRxfqtYKuao_Jny7wVsJpLhD3XZPiW7sz5ud8UtIuyApEMu4iRz_sPdKmYJrpuHSbiBPPAbkcZaFsWgmhzwHNnrP9vOOeodiQfK-dgKw5S9qvPT3h7SipQSAyU_bSiT2E-RTlNpQVXCJQbPh5-8VKuvxUuOb4Kufw8jxSdSczSR9B1Ap74AhQJnTDeTdrFQtNu5Q0jceK2uGNo4HueEe7pwl5f_KW-58xZezV30Ye99MITaDuoHDEATiKE6ZKU1KK-Snzpxc2GV6-g5oKBwv7g1OYpDXoc15TGiKcpSznCMQCflePbAKutQotc4rOfV-NeMOPfZQ'
    })

    it('get business profile and assert unauthorized response', function (): void {
        BusinessProfileApi.getBusinessProfileDetails(HTTPStatusCodeType.Unauthorized, BackendCommonEnum.INVALID_TOKEN, {
            failOnStatusCode: false
        });
    });

    it('get identity profile and assert expected response', function (): void {
        IdentityApi.getBusinessIdentity(HTTPStatusCodeType.OK_200, token, {}).then((response: Record<string, any>): void => {

            cy.log("TOKEN", token)
            console.log("TOKEN", token)
            expect(response).to.have.property('items').that.is.an('array');
            expect(response.items).to.have.length(IdentityData.DATA.items.length);

            response.items.forEach((item, index) => {
                const expectedItem = IdentityData.DATA.items[index];

                expect(item.account).to.have.property('_id', expectedItem.account._id);
                expect(item.client).to.deep.equal(expectedItem.client);
                expect(item).to.have.property('stateHistory').that.is.an('array');

                item.stateHistory.forEach((history, historyIndex) => {
                    expect(history).to.have.property('state');
                    expect(history.state).to.equal(expectedItem.stateHistory[historyIndex].state);
                });
            });
        });
    });

    it('get analytic Info and assert all response keys', function (): void {
        AnalyticApi.getDateRangeReport(HTTPStatusCodeType.OK_200, token, {}).then((response: Record<string, any>): void => {
            expect(response).to.have.all.keys(
                "startDateTime", "endDateTime", "totalOrderServices", "totalOrders", "totalRevenue", "specialistReports"
            );
        })
    });

    it('create product tag and delete', function (): void {
        let id: string = NumericUtils.generateObjectId()
        const tag = new ProductTagBuilder().setId(id).setName('TAG NO ' + faker.finance.pin(6)).build();
        ProductApi.createProductTag(tag, token).then(() => {
            ProductApi.deleteProductTag(id, token).then(() => {
                cy.log('product tag deleted');
            })
        })
    });
});
