import {NewContextIntroductionElement} from "./element/NewContextIntroductionElement";
import {Assertions} from "../../tab/common/assertions/Assertions";
import {QueryAssertion} from "../../../../common/assertion/QueryAssertion";

export class NewContextIntroductionPage {
    private element = new NewContextIntroductionElement()

    public assertState(): NewContextIntroductionPage {
        Assertions.assertProperties(this.element.getTitleElement(), 'innerText', "Witamy w \nBee O’clock")
        this.element.getSubTitleElement()
        QueryAssertion.verifyCorrectUrl('/identity/create-business')
        return this;
    }

    public clickBeginButton(): NewContextIntroductionPage {
        this.element.getBeginButton().click()
        return this
    }
}