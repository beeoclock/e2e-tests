import axios from 'axios';

const API_URL = 'https://api.mail.tm';

export class EmailService {
    /**
     * Tworzy konto e-mail w Mail.tm i zwraca adres e-mail oraz hasło.
     */
    public static async createAccount() {
        const domainRes = await axios.get(`${API_URL}/domains`);
        const domain = domainRes.data["hydra:member"][0].domain;

        const email = `test${Math.floor(Math.random() * 10000)}@${domain}`;
        const password = 'securepassword123';

        await axios.post(`${API_URL}/accounts`, {address: email, password});

        console.log(`Created email: ${email}`);
        return {email, password};
    }

    /**
     * Loguje się do Mail.tm i zwraca token autoryzacyjny.
     */
    public static async login(email: string, password: string) {
        const response = await axios.post(`${API_URL}/token`, {address: email, password});
        return response.data.token.toString();
    }

    /**
     * Pobiera listę wiadomości e-mail.
     */
    public static async getEmails(token: string) {
        const response = await axios.get(`${API_URL}/messages`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        return response.data["hydra:member"]; // Lista e-maili
    }

    /**
     * Pobiera treść konkretnej wiadomości e-mail.
     */
    public static async getEmailContent(token: string, messageId: string) {
        const response = await axios.get(`${API_URL}/messages/${messageId}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        return response.data;
    }
}
