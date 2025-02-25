import {SearchInput} from "support/beeoclock/page-element/common/common-element/element/SearchInput";
import {CustomerApiInterceptionHelper} from "../../../../../common/Interception/customer/CustomerApiInterceptionHelper";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";

export class ClientFilterPage {

    public typeSearchValue(value: string): ClientFilterPage {
        // const getCustomer = CustomerApiInterceptionHelper.getCustomer(value)
        SearchInput.getElement()
            .clear()
            .type(value).then(() => {
                SearchInput.getSearchButton().click()
            // ApiInterceptionHelper.waitForAlias(getCustomer)
        })
        return this
    }


}