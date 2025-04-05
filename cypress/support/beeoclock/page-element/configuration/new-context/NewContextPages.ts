import {SelectNewContextPage} from "./select-new-context/SelectNewContextPage";
import {NewContextIntroductionPage} from "./introduction-to-create/NewContextIntroductionPage";
import {NewContextCompanyNamePage} from "./company-name/NewContextCompanyNamePage";
import {NewContextPointOfSalePage} from "./point-of-sale/NewContextPointOfSalePage";
import {NewContextSchedulesPage} from "./schedules/NewContextSchedulesPage";
import {NewContextLanguagePage} from "./languages/NewContextLanguagePage";
import {NewContextServicePage} from "./services/NewContextServicePage";
import {NewContextNavigationPage} from "./navigation/NewContextNavigationPage";

export class NewContextPages {

    public static SelectNewContextPage: SelectNewContextPage = new SelectNewContextPage()
    public static NewContextIntroductionPage: NewContextIntroductionPage = new NewContextIntroductionPage()
    public static NewContextCompanyNamePage: NewContextCompanyNamePage = new NewContextCompanyNamePage()
    public static NewContextPointOfSalePage: NewContextPointOfSalePage = new NewContextPointOfSalePage();
    public static NewContextSchedulesPage: NewContextSchedulesPage = new NewContextSchedulesPage();
    public static NewContextLanguagePage: NewContextLanguagePage = new NewContextLanguagePage();
    public static NewContextServicePage: NewContextServicePage = new NewContextServicePage();
    public static NewContextNavigationPage: NewContextNavigationPage = new NewContextNavigationPage();
}