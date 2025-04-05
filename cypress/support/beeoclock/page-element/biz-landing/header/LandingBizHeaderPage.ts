import { LandingHeaderComponent } from "./element/LandingHeaderComponent";
import {Assertions} from "../../configuration/tab/common/assertions/Assertions";

export class LandingBizHeaderPage {
    private element = new LandingHeaderComponent()

    public assertLogo(): LandingBizHeaderPage {
        // Assertions(this.element.getLogo(),
        return this
    }

}