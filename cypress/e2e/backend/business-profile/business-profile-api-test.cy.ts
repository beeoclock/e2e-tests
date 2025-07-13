import {BusinessProfileApi} from "../../../support/beeoclock/backend/panel/business-profile/BusinessProfileApi";

describe('business-profile-api-test', (): void => {

    it('should verify business profile API response', (): void => {
        BusinessProfileApi.getBusinessProfile().then(response => {
            cy.log('resp', JSON.stringify(response))
        })
    })
})