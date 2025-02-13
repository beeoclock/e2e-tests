import axios from 'axios';

const API_URL = 'https://api.mail.tm';
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000;

export class EmailService {

    private static async fetchWithRetry(url: string, method: 'get' | 'post', data?: any) {
        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
            try {
                const response = method === 'get'
                    ? await axios.get(url)
                    : await axios.post(url, data);

                if ([200, 201].includes(response.status)) {
                    return response;
                }

                console.warn(`Attempt ${attempt}: Received status ${response.status}, retrying...`);
            } catch (error: any) {
                if (error.response?.status !== 200 || error.response?.status !== 201) {
                    console.warn(`Attempt ${attempt}: FAILED. Waiting before retrying...`);
                } else {
                    throw new Error(`Request failed: ${error.message}`);
                }
            }

            if (attempt < MAX_RETRIES) {
                await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
            }
        }

        throw new Error(`Failed after ${MAX_RETRIES} attempts`);
    }

    public static async createAccount() {
        const domainRes = await this.fetchWithRetry(`${API_URL}/domains`, 'get');
        const domain = domainRes.data["hydra:member"][0].domain;
        const email = `test${Math.floor(Math.random() * 10000)}@${domain}`;
        const password = 'securepassword123';

        const accountRes = await this.fetchWithRetry(`${API_URL}/accounts`, 'post', {address: email, password});

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
