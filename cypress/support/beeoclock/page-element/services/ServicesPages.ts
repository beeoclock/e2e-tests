import {BookingClientDataPage} from "./booking-client-data/BookingClientDataPage";
import {BookingClientNavigationFormPage} from "./booking-client-data/navigation/BookingClientNavigationFormPage";
import {DataAndTimeNavigationPage} from "./booking-day-and-time/navigation/DataAndTimeNavigationPage";
import {SelectDayPage} from "./booking-day-and-time/select-day/SelectDayPage";
import {SelectTimePage} from "./booking-day-and-time/select-time/SelectTimePage";
import {BookingSelectServicePage} from "./booking-select-service/BookingSelectServicePage";
import {SelectSpecialistPage} from "./booking-select-specialist/SelectSpecialistPage";
import {OrderCancellationPage} from "./order-cancellation/OrderCancellationPage";
import {OrderSummaryNavigationPage} from "./order-summary/navigation/OrderSummaryNavigationPage";
import {OrderDetailsPage} from "./order-summary/order-details/OrderDetailsPage";
import {OrderSummaryPage} from "./order-summary/order-summary/OrderSummaryPage";
import {ServiceSummaryPage} from "./booking-client-data/summary/ServiceSummaryPage";
import {ProductPage} from "./products/ProductPage";
import {NavigationPage} from "./navigation/NavigationPage";

export class ServicesPages {

    public static BookingSelectServicePage: BookingSelectServicePage = new BookingSelectServicePage();
    public static SelectSpecialistPage: SelectSpecialistPage = new SelectSpecialistPage();
    public static BookingClientDataPage: BookingClientDataPage = new BookingClientDataPage();
    public static BookingClientNavigationFormPage: BookingClientNavigationFormPage = new BookingClientNavigationFormPage();
    public static SelectDayPage: SelectDayPage = new SelectDayPage();
    public static SelectTimePage: SelectTimePage = new SelectTimePage();
    public static DataAndTimeNavigationPage: DataAndTimeNavigationPage = new DataAndTimeNavigationPage();
    public static OrderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
    public static OrderDetailsPage: OrderDetailsPage = new OrderDetailsPage();
    public static OrderSummaryNavigationPage: OrderSummaryNavigationPage = new OrderSummaryNavigationPage();
    public static OrderCancellationPage: OrderCancellationPage = new OrderCancellationPage();
    public static ServiceSummaryPage: ServiceSummaryPage = new ServiceSummaryPage();
    public static ProductPage: ProductPage = new ProductPage();
    public static NavigationPage: NavigationPage = new NavigationPage();
}
