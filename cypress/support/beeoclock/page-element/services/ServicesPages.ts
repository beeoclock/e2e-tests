import { BeardedBrothersPage } from "./bearded-brothers/BeardedBrothersPage";
import { BookingPage } from "./booking/BookingPage";
import { BookingNavigationFormPage } from "./booking/navigation/BookingNavigationFormPage";
import { SelectSpecialistPage } from "./select-specialist/SelectSpecialistPage";

export class ServicesPages {

    public static BeardedBrothersPage: BeardedBrothersPage = new BeardedBrothersPage();    
    public static SelectSpecialistPage: SelectSpecialistPage = new SelectSpecialistPage();    
    public static BookingPage: BookingPage = new BookingPage();    
    public static BookingNavigationFormPage: BookingNavigationFormPage = new BookingNavigationFormPage();    
}