import {AbsencePageElement} from "./AbsencePageElement";
import {CommonElementPage} from "../../../../common/common-element/CommonElementPage";
import dayjs from "dayjs";
import {LeftMenuPage} from "../../../left-menu/LeftMenuPage";

export class AbsencePage {

    public verifyAbsenceFromDate(fromDate: string): AbsencePage {
        AbsencePageElement.AbsenceFromDate.getElement().invoke('prop', 'textContent').then(textContent => {
            expect(textContent).to.include(fromDate)
        })
        return this
    }

    public assertCurrentTimeMatches(): AbsencePage {
        AbsencePageElement.AbsenceFromTime.getElement()
            .invoke('prop', 'textContent')
            .then((textContent: string): void => {
                const actualTime = textContent.trim();

                const currentTime = dayjs();
                const expectedTime = currentTime.format("HH:mm");
                const previousTime = currentTime.subtract(1, 'minute').format("HH:mm");
                const nextTime = currentTime.add(1, 'minute').format("HH:mm");

                cy.log(`Actual time: ${actualTime}, Expected: ${expectedTime}, Prev: ${previousTime}, Next: ${nextTime}`);

                cy.wrap(actualTime).should('be.oneOf', [expectedTime, previousTime, nextTime]);
            });

        return this;
    }


    public verifyAbsenceFromTime(fromTime: string): AbsencePage {
        AbsencePageElement.AbsenceFromTime.getElement().invoke('prop', 'textContent').then(textContent => {
            expect(textContent).to.include(fromTime)
        })
        return this
    }

    public verifyAbsenceToDate(toDate: string): AbsencePage {
        AbsencePageElement.AbsenceToDate.getElement().invoke('prop', 'textContent').then(textContent => {
            expect(textContent).to.include(toDate)
        })
        return this
    }

    public verifyAbsenceToTime(toTime: string): AbsencePage {
        AbsencePageElement.AbsentToTime.getElement().invoke('prop', 'textContent').then(textContent => {
            expect(textContent).to.include(toTime)
        })
        return this
    }

    public typeAbsenceNote(note: string): AbsencePage {
        AbsencePageElement.AbsenceNoteInput.getElement()
            .type(note)
        return this;
    }

    public clickSaveButton(): AbsencePage {
        CommonElementPage.clickSaveButton()
        cy.document().its('readyState').should('equal', 'complete')
        LeftMenuPage.assertIsSynchronizationExecuted()
        LeftMenuPage.assertIsSynchronized(true)
        return this;
    }
}