import {CalendarNavigationPageElement} from "./CalendarNavigationPageElement";
import {DateUtils} from "../../../../../backend/Utils/DateUtils";

export class CalendarNavigationPage {

    public verifyCurrenDate(): CalendarNavigationPage {
        cy.document().its('readyState').should('equal', 'complete')
        cy.wait(1000)
        CalendarNavigationPageElement.DateInformationLabel.getElement()
            .invoke('prop', 'outerText').then(outerText => {
            expect(outerText).to.contain("Dziś\n" + DateUtils.getCurrentDateFormatted())
        })
        return this
    }

    public clickNextDayArrow(): CalendarNavigationPage {
        CalendarNavigationPageElement.NextDayArrow.getElement()
            .click()
        return this;
    }

    public clickPreviousDayArrow(): CalendarNavigationPage {
        CalendarNavigationPageElement.PreviousDayArrow.getElement()
        return this;
    }

    public verifyNextDayDate(): CalendarNavigationPage {
        CalendarNavigationPageElement.DateInformationLabel.getElement()
            .invoke('prop', 'outerText').then(outerText => {
            expect(outerText).to.contain("Jutro\n" + DateUtils.getCurrentDatePlusGivenDay(1, "YYYY-MM-DD"));
        })
        return this;
    }
}