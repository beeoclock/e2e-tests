import {BreakNavigationElement} from "./BreakNavigationElement";
import {DateUtils} from "../../../../../backend/Utils/DateUtils";

export class BreakScienceGivenTimePage {

    //by science values
    public verifySelectedNextDayTimeLabel(hour: string): BreakScienceGivenTimePage {
        BreakNavigationElement.GivenTimeBreakLabel.getElement().invoke('prop', 'innerText').then(innerText => {
            expect(innerText).to.contain('Od:\n' + DateUtils.getCurrentDatePlusDays(1) + ', ' + hour + ':00:00')
        });
        return this;
    }

    public clickBreakRange(range: string): BreakScienceGivenTimePage {
        BreakNavigationElement.SelectGivenTimeBreakButton.getElement(range)
            .click();
        return this;
    }
}