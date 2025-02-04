import { getLastEmail } from "support/getEmail";

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
    on('task', {
        getLastEmail,
    });

    return config;
};
