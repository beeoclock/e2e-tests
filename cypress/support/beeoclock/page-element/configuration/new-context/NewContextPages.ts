import {SelectNewContextPage} from "./select-new-context/SelectNewContextPage";
import {NewContextIntroductionPage} from "./introduction-to-create/NewContextIntroductionPage";
import {NewContextCompanyNamePage} from "./company-name/NewContextCompanyNamePage";
import {NewContextSelectIndustryPage} from "./select-industry-page/NewContextSelectIndustryPage";

export class NewContextPages {

    public static SelectNewContextPage: SelectNewContextPage = new SelectNewContextPage()
    public static NewContextIntroductionPage: NewContextIntroductionPage = new NewContextIntroductionPage()
    public static NewContextCompanyNamePage: NewContextCompanyNamePage = new NewContextCompanyNamePage()
    public static NewContextSelectIndustryPage: NewContextSelectIndustryPage = new NewContextSelectIndustryPage()
}