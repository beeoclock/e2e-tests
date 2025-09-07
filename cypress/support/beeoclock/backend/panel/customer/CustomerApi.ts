import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";
import {ICustomer} from "./create/ICustomer";
import {ICustomerSearchCriteria} from "./queries/ICustomerSearchCriteria";
import {ApiRequestHelper, Environment} from "../../../common/Interception/ApiRequestHelper";

export class CustomerApi extends ApiRequestHelper {

    public static createCustomerWithBuilder(customer: ICustomer, options: Partial<Cypress.RequestOptions>, env?: Environment): any {
        const environment: Environment = env ?? Environment.dev;
        return this.getHeaders(env).then(headers => {
            return cy.request({
                method: 'POST',
                url: this.getApiEntryPoint(environment) + '/customer',
                headers: headers,
                body: customer,
                ...options
            });
        });
    }

    public static updateCustomerWithBuilder(customer: ICustomer, customerId: string, options: Partial<Cypress.RequestOptions>, env?: Environment): any {
        let environment: Environment = env ?? Environment.dev
        return cy.request({
            method: 'PUT',
            url: this.getApiEntryPoint(environment) + '/customer/' + customerId,
            headers: {
                'X-Business-Tenant-Id': this.getTenantId(environment),
            },
            body: customer,
            auth: {
                bearer: Cypress.env('token')
            },
            ...options
        }).then(response => {
            return response;
        })
    }

    public static deleteCustomer(customerId: string, options: Partial<Cypress.RequestOptions>, env?: Environment): any {
        let environment: Environment = env ?? Environment.dev
        return cy.request({
            method: 'DELETE',
            url: this.getApiEntryPoint(environment) + '/customer/' + customerId,
            headers: {
                'X-Business-Tenant-Id': this.getTenantId(environment),
            },
            auth: {
                bearer: Cypress.env('token')
            },
            ...options
        }).then(response => {
            return response;
        })
    }

    public static getCustomerPaged(query: ICustomerSearchCriteria, options: Partial<Cypress.RequestOptions>, env?: Environment): any {
        let environment: Environment = env ?? Environment.dev
        return cy.request({
            method: 'GET',
            url: this.getApiEntryPoint(environment) + '/customer/paged',
            headers: {
                'X-Business-Tenant-Id': this.getTenantId(environment),
            },
            qs: query,
            auth: {
                bearer: this.getToken(environment)
            },
            ...options
        }).then(response => {
            expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
            return response.body;
        })
    }

    public static getCustomerById(customerId: string, env?: Environment): any {
        let environment: Environment = env ?? Environment.dev
        return cy.request({
            method: 'GET',
            url: this.getApiEntryPoint(environment) + '/customer/' + customerId,
            headers: {
                'X-Business-Tenant-Id': this.getTenantId(environment),
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            },
            auth: {
                bearer: Cypress.env('token')
            }
        }).then(response => {
            expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
            return response.body;
        })
    }
}