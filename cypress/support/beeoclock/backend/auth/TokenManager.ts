import fs from 'fs';
import path from 'path';

const tokenPath: string = path.resolve('cypress/token.json');

export function getTokenData() {
    if (!fs.existsSync(tokenPath)) {
        return null;
    }

    try {
        const content = fs.readFileSync(tokenPath, 'utf8');
        return JSON.parse(content);
    } catch {
        return null;
    }
}

export function saveTokenData(token: string, tokenValidTo: string) {
    fs.writeFileSync(tokenPath, JSON.stringify({token, tokenValidTo}, null, 2));
}
