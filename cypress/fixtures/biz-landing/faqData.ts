interface FaqItem {
    question: string;
    boldAnswer: string;
    answer: string;
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
            ]
        };
    }
}
