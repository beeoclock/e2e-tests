export interface FaqItem {
    question: string;
    boldAnswer?: string;
    answer?: string;
    liValue1?: string;
    liValue2?: string;
    liValue3?: string;
    liValue4?: string;
    liValue5?: string;
    liValue6?: string;
}

interface FaqPlObject {
    faq: FaqItem[];
}

export class FaqData {

    public static getPlObject(): FaqPlObject {
        return {
            faq: [
                {
                    question: "Jak szybko możesz rozpocząć korzystanie z Bee o’clock?",
                    boldAnswer: "Rozpoczęcie korzystania z usługi jest bardzo proste:",
                    answer: "zarejestruj się na platformie, dodaj podstawowe informacje o swojej firmie i usługach, a system będzie gotowy do pracy. Masz możliwość skorzystania z bezpłatnego planu (Free) z podstawową funkcjonalnością, który pozwoli Ci natychmiast przetestować kluczowe funkcje Bee o’clock bez żadnych kosztów."
                },
                {
                    question: "Jakie funkcje oferuje Bee o’clock i czym różni się od innych usług?",
                    boldAnswer: "Bee o’clock oferuje kompleksowy zestaw",
                    answer: "narzędzia do automatyzacji rezerwacji online",
                    liValue1: "Automatyzacja rezerwacji: system automatycznie rejestruje nowe rezerwacje i rezerwuje czas w kalendarzu.",
                    liValue2: "Przypomnienia dla klientów: powiadomienia SMS i e-mail pomogą ograniczyć liczbę pominiętych wizyt.",
                    liValue3: "Dostosowanie do Twojej marki: możesz zmienić wygląd swojej strony publicznej i dostosować interfejs do potrzeb swojej firmy.",
                    liValue4: "Zarządzanie rezerwacjami online: cały harmonogram masz zawsze pod ręką i możesz uzyskać do niego dostęp ze smartfona lub komputera.",
                    liValue5: "Analityka i rozwój: usługa śledzi statystyki, co umożliwia udoskonalenie interakcji z klientami.",
                    liValue6: "Różne plany cenowe: od bezpłatnego do zaawansowanego PRO, z możliwością podłączenia asystenta AI i publicznego interfejsu API REST."
                },
                {
                    question: "Jak skonfigurować i zarządzać rezerwacjami online w Bee o’clock?",
                    boldAnswer: "Wszystko odbywa się w kilku prostych krokach",
                    liValue1: "Zarejestruj się na platformie: załóż konto i wprowadź dane swojej firmy.",
                    liValue2: "Ustawienia usługi: dodaj listę usług, ustaw czas trwania i cenę.",
                    liValue3: "Zaproś klientów: udostępnij unikalny link do swojego profilu za pośrednictwem swojej witryny internetowej, mediów społecznościowych lub poczty e-mail.",
                    liValue4: "Rezerwacje klientów online: klienci mogą zarezerwować usługę kilkoma kliknięciami, a Ty otrzymasz powiadomienie o każdej nowej rezerwacji.",
                    liValue5: "Zarządzaj swoimi nagraniami: wygodnie zmieniaj swój harmonogram, śledź aktywność i otrzymuj powiadomienia o zmianach.",
                    liValue6: "Analiza i rozwój: Przeglądaj statystyki, aby ocenić wydajność i udoskonalić swoją usługę.",
                },
                {
                    question: "Czy mogę przyjmować płatności online i otrzymywać powiadomienia o pomyślnych transakcjach?",
                    answer: "Tak, plany BASIC i PRO mają funkcję Potwierdzenie płatności, która umożliwia śledzenie płatności klientów. Usługa wysyła również powiadomienia SMS i e-mail, dzięki czemu Ty i Twoi klienci jesteście zawsze na bieżąco z aktualizacjami rezerwacji i płatności. Wszystko to zapewnia bezpieczne i przejrzyste transakcje."
                },
                {
                    question: "Jakie plany taryfowe są dostępne i czym się różnią?",
                    liValue1: "Free (0 PLN): 1 użytkownik, strona publiczna, panel administracyjny, pakiet SEO, JSON LD, powiadomienia e-mail. Nadaje się do małych projektów lub testów.",
                    liValue2: "Basic (59 PLN): 5 użytkowników, strona publiczna, panel administracyjny, pakiet SEO, JSON LD, powiadomienia e-mail, nieograniczona liczba wtyczek, potwierdzenie płatności i powiadomienia SMS. Rozwiązanie dla małych i średnich firm.",
                    liValue3: "Pro (189 PLN): nieograniczona liczba użytkowników, pełny dostęp do funkcji, w tym asystenta AI i Public REST API. Idealne dla zaawansowanych i skalowalnych projektów.",
                },
            ]
        };
    }

    public static getEnObject(): FaqPlObject {
        return {
            faq: [
                {
                    question: "How quickly can you get started with Bee o’clock?",
                    boldAnswer: "Starting to use the service is very simple:",
                    answer: "register on the platform, add basic information about your business and services, and the system will be ready to go. You have the option to use the free plan (Free) with basic functionality, which will allow you to immediately test the key features of Bee o’clock without any costs."
                },
                {
                    question: "What features does Bee o’clock provide and how does it differ from other services?",
                    boldAnswer: "Bee o’clock offers a comprehensive set",
                    answer: "tools for automating online bookings",
                    liValue1: "Automation of bookings: the system automatically records new bookings and reserves time in the calendar.",
                    liValue2: "Reminders to clients: SMS and e-mail notifications will help reduce the number of missed appointments.",
                    liValue3: "Customization for your brand: you can change the appearance of your public page and customize the interface to suit your business.",
                    liValue4: "Online booking management: the entire schedule is always at hand and can be accessed from a smartphone or computer.",
                    liValue5: "Analytics and development: the service tracks statistics so you can improve customer interactions.",
                    liValue6: "Various pricing plans: from free to advanced PRO, with the ability to connect an AI assistant and public REST API."
                },
                {
                    question: "How to set up and manage online bookings in Bee o’clock?",
                    boldAnswer: "Everything happens in a few simple steps",
                    liValue1: "Register on the platform: create an account and enter your business details.",
                    liValue2: "Service settings: add a list of services, set the duration and price.",
                    liValue3: "Invite customers: share a unique link to your profile via your website, social media, or email.",
                    liValue4: "Online customer booking: customers can book a service in a few clicks, and you will receive notifications about each new booking.",
                    liValue5: "Manage your recordings: Conveniently change your schedule, track activity, and get notified about changes.",//report mismatch of first big letter pattern
                    liValue6: "Analysis and development: View statistics to evaluate performance and improve your service."
                },
                {
                    question: "Can I accept online payments and receive notifications about successful transactions?",
                    answer: "Yes, the BASIC and PRO plans have a Payment Confirmation feature that allows you to track customer payments. The service also sends SMS and email notifications so that you and your customers are always up to date with booking and payment updates. All this ensures safe and transparent transactions."
                },
                {
                    question: "What tariff plans are available and how do they differ?",
                    liValue1: "Free (0 USD): 1 user, public page, admin panel, SEO Package, JSON LD, e-mail notifications. Suitable for small projects or testing.",
                    liValue2: "Basic (55 USD): 5 users, public page, admin panel, SEO Package, JSON LD, email notifications, unlimited plugins, Payment Confirmation and SMS Notifications. Solution for small and medium businesses.",
                    liValue3: "Pro (89 USD): Unlimited users, full access to features, including AI assistant and Public REST API. Ideal for advanced and scalable projects."
                }
            ]
        };
    }
}
