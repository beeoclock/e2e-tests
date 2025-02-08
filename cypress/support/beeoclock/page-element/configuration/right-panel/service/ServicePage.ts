import {ServicePageElement} from "./ServicePageElement";

export class ServicePage {

    public typeServiceName(serviceName: string): ServicePage {
        ServicePageElement.ServiceNameInput.getServiceNameInput()
            .type(serviceName);
        return this;
    }

    public typeServiceDescription(serviceDescription: string): ServicePage {
        if (serviceDescription) {
            ServicePageElement.ServiceDescriptionInput.getServiceDescriptionInput()
                .type(serviceDescription);
        }
        return this;
    }
}