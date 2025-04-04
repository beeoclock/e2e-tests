import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {CalendarTableTimeEnum} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";

describe('convert to UTC test', () => {

    it('convert to UTC', function () {
        const utcDate = DateUtils.convertToUTC(CalendarTableTimeEnum.Hour_15)
        cy.log('UTC date: ' + utcDate);
    })
})