import {BreakNavigationElement} from "./BreakNavigationElement";
import {DateUtils} from "../../../../../backend/Utils/DateUtils";

export class BreakScienceGivenTimePage {

    //by science values
    public verifySelectedNextDayTimeLabel(hour: string): BreakScienceGivenTimePage {
        BreakNavigationElement.GivenTimeBreakLabel.getSelectedTime().invoke('prop', 'innerText').then(innerText => {
            expect(innerText).to.contain(DateUtils.getCurrentDatePlusDays(1) + ', ' + hour + ':00')
        });
        return this;
    }

    public verifySelectedSpecialistLabel(specialist: string): BreakScienceGivenTimePage {
        BreakNavigationElement.GivenTimeBreakLabel.getSpecialist().invoke('prop', 'innerText').then(innerText => {
            const cleanedInnerText = innerText.replace(/\u00A0/g, ' ').trim();
            const cleanedSpecialist = specialist.replace(/\u00A0/g, ' ').trim();
            expect(cleanedInnerText).to.contain(cleanedSpecialist);
        });
        return this;
    }

    public clickAbsenceButton(): BreakScienceGivenTimePage {
        const element = cy.get('.flex-col > .ng-untouched > :nth-child(2)')
        element.scrollIntoView().should('be.visible')
        element.click();
        return this
    }

    public clickBreakRange(range: string): BreakScienceGivenTimePage {
        BreakNavigationElement.SelectGivenTimeBreakButton.getElement(range)
            .click();
        return this;
    }

    //science now

    public clickBreakRangeScienceNow(range: string): BreakScienceGivenTimePage {
        BreakNavigationElement.SelectTimeRange.getElement(range)
            .click();
        return this;
    }
}