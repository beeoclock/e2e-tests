import {SelectNewContextPage} from "./select-new-context/SelectNewContextPage";
import {NewContextIntroductionPage} from "./introduction-to-create/NewContextIntroductionPage";
import {NewContextCompanyNamePage} from "./company-name/NewContextCompanyNamePage";
import {NewContextSelectIndustryPage} from "./select-industry-page/NewContextSelectIndustryPage";
import {IndustryDetails} from "./industry-details/IndustryDetails";
import {NewContextPointOfSalePage} from "./point-of-sale/NewContextPointOfSalePage";
import {NewContextSchedulesPage} from "./schedules/NewContextSchedulesPage";

export class NewContextPages {

    public static SelectNewContextPage: SelectNewContextPage = new SelectNewContextPage()
    public static NewContextIntroductionPage: NewContextIntroductionPage = new NewContextIntroductionPage()
    public static NewContextCompanyNamePage: NewContextCompanyNamePage = new NewContextCompanyNamePage()
    public static NewContextSelectIndustryPage: NewContextSelectIndustryPage = new NewContextSelectIndustryPage()
    public static industryDetails: IndustryDetails = new IndustryDetails();
    public static NewContextPointOfSalePage: NewContextPointOfSalePage = new NewContextPointOfSalePage();
    public static NewContextSchedulesPage: NewContextSchedulesPage = new NewContextSchedulesPage();
}