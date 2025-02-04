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
export async function getLastEmail(): Promise<{ subject: string; body: string } | null> {
    try {
        const connection: ImapSimple = await imapSimple.connect(imapConfig);
        await connection.openBox('INBOX');

        const searchCriteria = ['ALL']; // Pobiera wszystkie e-maile
        const fetchOptions = { bodies: ['HEADER', 'TEXT'], markSeen: true };

        const messages = await connection.search(searchCriteria, fetchOptions);
        if (messages.length === 0) return null;

        const latestEmail = messages[messages.length - 1];
        const allParts = latestEmail.parts.find((part) => part.which === 'TEXT');

        const parsedEmail = await simpleParser(allParts?.body || '');
        await connection.end();

        return { subject: parsedEmail.subject || '', body: parsedEmail.text || '' };
    } catch (error) {
        console.error('IMAP ERROR:', error);
        return null;
    }
}
