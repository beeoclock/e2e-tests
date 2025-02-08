import axios from 'axios';

const API_URL = 'https://api.mail.tm';

/**
 * Tworzy konto e-mail w Mail.tm i zwraca adres e-mail oraz hasło.
 */
async function createAccount() {
    const domainRes = await axios.get(`${API_URL}/domains`);
    const domain = domainRes.data["hydra:member"][0].domain; // Pobieranie pierwszej dostępnej domeny

    const email = `test${Math.floor(Math.random() * 10000)}@${domain}`;
    const password = 'securepassword123';

    await axios.post(`${API_URL}/accounts`, { address: email, password });

    console.log(`Created email: ${email}`);
    return { email, password };
}

/**
 * Loguje się do Mail.tm i zwraca token autoryzacyjny.
 */
async function login(email: string, password: string) {
    const response = await axios.post(`${API_URL}/token`, { address: email, password });
    return response.data.token;
}

/**
 * Pobiera listę wiadomości e-mail.
 */
async function getEmails(token: string) {
    const response = await axios.get(`${API_URL}/messages`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data["hydra:member"]; // Lista e-maili
}

/**
 * Pobiera treść konkretnej wiadomości e-mail.
 */
async function getEmailContent(token: string, messageId: string) {
    const response = await axios.get(`${API_URL}/messages/${messageId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

/**
 * Przykładowe użycie.
 */
