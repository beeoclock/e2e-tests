import {DateUtils} from "../../../../backend/Utils/DateUtils";
import {SelectDayPageElement} from "./SelectDayPageElement";

export class SelectDayPage {

    public selectNextDay(): SelectDayPage {
        SelectDayPageElement.SelectDayButton.getElement(DateUtils.getNextDayNumber())
            .click()
        return this;
    }

    public assertSelectedServiceSection(selectedService: string, serviceTime: string): SelectDayPage {
        this.assertLabel()
        this.assertSelectedServiceName(selectedService)
        this.assertServiceTime(serviceTime)
        return this
    }

    private assertLabel(): SelectDayPage {
        SelectDayPageElement.SelectedServiceComponent.getElement()
            .contains('p', 'Wybrana usługa').should('have.class', 'mt-1 text-sm')
            .scrollIntoView().should('be.visible')
        return this
    }

    private assertSelectedServiceName(selectedService: string): SelectDayPage {
        SelectDayPageElement.SelectedServiceComponent.getSelectedServiceName()
            .invoke('prop', 'innerText').then(innerText => {
            expect(innerText).to.equals(selectedService)
        })
        return this
    }

    private assertServiceTime(time: string): SelectDayPage {
        SelectDayPageElement.SelectedServiceComponent.getSelectedServiceTime()
            .invoke('prop', 'innerText').then(innerText => {
            expect(innerText).to.equals(time)
        })
        return this
    }
}