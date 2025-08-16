import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {CalendarTableTimeEnum} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";

describe('convert to UTC test', (): void => {

    it('convert to UTC', function (): void {
        const utcDate = DateUtils.convertToUTC(CalendarTableTimeEnum.Hour_15)
        cy.log('UTC date: ' + utcDate);
    })
})