import {RightPanelNavigationPage} from "./navigation/RightPanelNavigationPage";
import {RightPanelServicesPage} from "./oder-form/service/RightPanelServicesPage";
import {SummaryAndPaymentServicePage} from "./oder-form/summary-and-peyment/SummaryAndPaymentServicePage";
import {CustomerPage} from "./oder-form/service/customer/CustomerPage";
import {BreakScienceGivenTimePage} from "./break/navigation/BreakScienceGivenTimePage";
import {AbsencePage} from "./break/absence/AbsencePage";

export class RightPanelPages {

    public static RightPanelNavigationPage: RightPanelNavigationPage = new RightPanelNavigationPage()
    public static RightPanelServicesPage: RightPanelServicesPage = new RightPanelServicesPage()
    public static SummaryAndPaymentServicePage: SummaryAndPaymentServicePage = new SummaryAndPaymentServicePage()
    public static CustomerPage: CustomerPage = new CustomerPage()
    public static BreakScienceGivenTimePage: BreakScienceGivenTimePage = new BreakScienceGivenTimePage()
    public static AbsencePage: AbsencePage = new AbsencePage()
}