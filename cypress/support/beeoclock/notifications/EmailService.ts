import axios from 'axios';

const API_URL = 'https://api.mail.tm';

export class EmailService {
    private static token: string | null = null;
    private static email: string;
    private static password: string;

    /**
     * Tworzy konto e-mail w Mail.tm i zwraca adres e-mail oraz hasło.
     */
    public static async createAccount() {
        const domainRes = await axios.get(`${API_URL}/domains`);
        const domain = domainRes.data["hydra:member"][0].domain;

        EmailService.email = `test${Math.floor(Math.random() * 10000)}@${domain}`;
        EmailService.password = 'securepassword123';

        await axios.post(`${API_URL}/accounts`, {address: EmailService.email, password: EmailService.password});
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log(`Created email: ${EmailService.email}`);
        return {email: EmailService.email, password: EmailService.password};
    }

    /**
     * Loguje się do Mail.tm i zapisuje token autoryzacyjny.
     */
    private static async refreshToken() {
        if (!EmailService.email || !EmailService.password) {
            throw new Error("Email or password is missing. Call createAccount() first.");
        }

        const response = await axios.post(`${API_URL}/token`, {
            address: EmailService.email,
            password: EmailService.password
        });

        EmailService.token = response.data.token.toString();
    }

    /**
     * Pobiera listę wiadomości e-mail.
     */
    public static async getEmails(retries = 5, delay = 3000) {
        await EmailService.refreshToken();
        for (let i = 0; i < retries; i++) {
            const response = await axios.get(`${API_URL}/messages`, {
                headers: {Authorization: `Bearer ${EmailService.token}`},
            });
            if (response.data["hydra:member"].length > 0) {
                return response.data["hydra:member"];
            }
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        throw new Error("No emails received after multiple retries.");
    }

    /**
     * Pobiera treść konkretnej wiadomości e-mail.
     */
    public static async getEmailContent(messageId: string) {
        await EmailService.ensureToken();
        const response = await axios.get(`${API_URL}/messages/${messageId}`, {
            headers: {Authorization: `Bearer ${EmailService.token}`},
        });
        return response.data;
    }

    /**
     * Sprawdza, czy token jest dostępny, i odświeża go w razie potrzeby.
     */
    private static async ensureToken() {
        if (!EmailService.token) {
            await EmailService.refreshToken();
        }
    }
}
