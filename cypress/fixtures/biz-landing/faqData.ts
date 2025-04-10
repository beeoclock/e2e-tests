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
}
