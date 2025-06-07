import {BusinessProfileApi} from "../../../support/beeoclock/backend/panel/business-profile/BusinessProfileApi";

describe('business-profile-api-test', () => {

    it('should verify business profile API response', () => {
        BusinessProfileApi.getBusinessProfile().then(response => {
            cy.log('resp', JSON.stringify(response))
        })
    })
})