import {CalendarReloadButton} from "./element/CalendarReloadButton";
import {SaveButton} from "./element/SaveButton";
import {BlueAddResource} from "./element/BlueAddResource";
import {SearchInput} from "./element/SearchInput";

export class CommonElementPage {

    public static clickSaveButton(): CommonElementPage {
        SaveButton.getElement().click()
        return this;
    }

    public static reloadOnCalendar(): CommonElementPage {
        // const getOrder  = ApiInterceptionHelper.getOrder()
        CalendarReloadButton.getElement()
            .click()
        // ApiInterceptionHelper.waitForAlias(getOrder)
        return this
    }

    public static clickAddResourceButton(): CommonElementPage {
        BlueAddResource.getElement().click()
        return this
    }

    public static typeMainSearchInput(value: string): CommonElementPage {
        SearchInput.getElement()
            .type(value)
        return this;
    }

    public static bodyEscape(): CommonElementPage {
        cy.get('body').type('{esc}')
        return this;
    }
}