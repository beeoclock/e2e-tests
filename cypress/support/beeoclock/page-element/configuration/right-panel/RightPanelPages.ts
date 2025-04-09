import {RightPanelNavigationPage} from "./navigation/RightPanelNavigationPage";
import {RightPanelServicesPage} from "./oder-form/service/RightPanelServicesPage";
import {SummaryAndPaymentServicePage} from "./oder-form/summary-and-peyment/SummaryAndPaymentServicePage";
import {CustomerPage} from "./oder-form/service/customer/CustomerPage";
import {BreakScienceGivenTimePage} from "./break/navigation/BreakScienceGivenTimePage";
import {AbsencePage} from "./break/absence/AbsencePage";
import {ClientFormPage} from "./client-form/ClientFormPage";
import {ClientFilterPage} from "./client-form/filter/ClientFilterPage";
import {ServicePage} from "./service/ServicePage";
import {MemberRightPanel} from "./members/MemberRightPanel";

export class RightPanelPages {

    public static RightPanelNavigationPage: RightPanelNavigationPage = new RightPanelNavigationPage()
    public static RightPanelServicesPage: RightPanelServicesPage = new RightPanelServicesPage()
    public static SummaryAndPaymentServicePage: SummaryAndPaymentServicePage = new SummaryAndPaymentServicePage()
    public static CustomerPage: CustomerPage = new CustomerPage()
    public static BreakScienceGivenTimePage: BreakScienceGivenTimePage = new BreakScienceGivenTimePage()
    public static AbsencePage: AbsencePage = new AbsencePage()
    public static ClientFormPage: ClientFormPage = new ClientFormPage()
    public static ClientFilterPage: ClientFilterPage = new ClientFilterPage()
    public static ServicePage: ServicePage = new ServicePage()
    public static MemberRightPanel: MemberRightPanel = new MemberRightPanel()
}