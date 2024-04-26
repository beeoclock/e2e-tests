import { BeardedBrothersPage } from "./bearded-brothers/BeardedBrothersPage";
import { BookingClientDataPage } from "./booking-client-data/BookingClientDataPage";
import { BookingClientNavigationFormPage } from "./booking-client-data/navigation/BookingClientNavigationFormPage";
import { DataAndTimeNavigationPage } from "./booking-day-and-time/navigation/DataAndTimeNavigationPage";
import { SelectDayPage } from "./booking-day-and-time/select-day/SelectDayPage";
import { SelectTimePage } from "./booking-day-and-time/select-time/SelectTimePage";
import { SelectSpecialistPage } from "./select-specialist/SelectSpecialistPage";

export class ServicesPages {

    public static BeardedBrothersPage: BeardedBrothersPage = new BeardedBrothersPage();    
    public static SelectSpecialistPage: SelectSpecialistPage = new SelectSpecialistPage();    
    public static BookingClientDataPage: BookingClientDataPage = new BookingClientDataPage();    
    public static BookingClientNavigationFormPage: BookingClientNavigationFormPage = new BookingClientNavigationFormPage();    
    public static SelectDayPage: SelectDayPage = new SelectDayPage();    
    public static SelectTimePage: SelectTimePage = new SelectTimePage();    
    public static DataAndTimeNavigationPage: DataAndTimeNavigationPage = new DataAndTimeNavigationPage();    
}