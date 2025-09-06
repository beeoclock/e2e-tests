import fs from 'fs';
import path from 'path';
import {Environment} from "../../common/Interception/ApiRequestHelper";

const tokenPath: string = path.resolve('cypress/token.json');

export function getTokenData(env: Environment) {
    if (!fs.existsSync(tokenPath)) {
        return null;
    }

    try {
        const content = fs.readFileSync(tokenPath, 'utf8');
        const json = JSON.parse(content);
        return json[env] || null;
    } catch {
        return null;
    }
}

export function saveTokenData(env: Environment, token: string, tokenValidTo: string) {
    let json: any = {};

    if (fs.existsSync(tokenPath)) {
        try {
            json = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));
        } catch {
            json = {};
        }
    }

    json[env] = { token, tokenValidTo };

    fs.writeFileSync(tokenPath, JSON.stringify(json, null, 2));
}
