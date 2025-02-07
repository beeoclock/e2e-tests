import imapSimple, { ImapSimpleOptions, ImapSimple } from 'imap-simple';
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
        try {
            const connection: ImapSimple = await imapSimple.connect(imapConfig);
            await connection.openBox('INBOX');

            const searchCriteria = ['ALL'];
            const fetchOptions = { bodies: ['HEADER', 'TEXT'], markSeen: true };

            const messages = await connection.search(searchCriteria, fetchOptions);
            await connection.end();

            if (messages.length === 0) {
                console.log(`Attempt ${attempt}/${maxRetries}: No new email found, retrying...`);
                await new Promise((resolve) => setTimeout(resolve, intervalMs));
                continue;
            }

            const latestEmail = messages[messages.length - 1];
            const allParts = latestEmail.parts.find((part) => part.which === 'TEXT');

            const parsedEmail = await simpleParser(allParts?.body || '');
            return { subject: parsedEmail.subject || '', body: parsedEmail.text || '' };
        } catch (error) {
            console.error('IMAP ERROR:', error);
        }

        await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }

    console.warn('Max retries reached. No email received.');
    return null;
}
