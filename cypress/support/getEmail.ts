import imapSimple, { ImapSimpleOptions, ImapSimple, Message } from 'imap-simple';
import { simpleParser } from 'mailparser';

const imapConfig: ImapSimpleOptions = {
    imap: {
        user: 'jan.zaduminski@beeoclock.com',
        password: process.env.MAIL_PASSWORD,
        host: 'mx1.mirohost.net',
        port: 993,
        tls: true,
        authTimeout: 5000,
    },
};

/**
 * Pobiera ostatni e-mail z inboxa.
 */
export async function getLastEmail(
    maxRetries = 6,
    intervalMs = 2000
): Promise<{ subject: string; body: string } | null> {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        let connection: ImapSimple | null = null;
        try {
            connection = await imapSimple.connect(imapConfig);
            await connection.openBox('INBOX');

            const searchCriteria = ['ALL'];
            const fetchOptions = { bodies: '', markSeen: true };

            const messages: Message[] = await connection.search(searchCriteria, fetchOptions);

            if (messages.length === 0) {
                console.log(`Attempt ${attempt}/${maxRetries}: No email found, retrying...`);
                await new Promise((resolve) => setTimeout(resolve, intervalMs));
                continue;
            }

            const latestEmail = messages[messages.length - 1];
            const parsedEmail = await simpleParser(latestEmail.parts[0].body || '');

            return { subject: parsedEmail.subject || '', body: parsedEmail.text || '' };
        } catch (error) {
            console.error(`IMAP ERROR (attempt ${attempt}/${maxRetries}):`, error);
        } finally {
            if (connection) {
                await connection.end();
            }
        }

        await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }

    console.warn('Max retries reached. No email received.');
    return null;
}
