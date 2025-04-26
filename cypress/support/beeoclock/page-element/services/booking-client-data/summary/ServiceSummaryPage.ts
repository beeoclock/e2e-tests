import {SelectedServiceElement} from "./SelectedServiceElement";
import {BookingClientDataPageElement} from "../BookingClientDataPageElement";

export class ServiceSummaryPage {
    private SelectedServiceElement = new SelectedServiceElement();

    public verifySelectedServiceOnSummary(service: string): ServiceSummaryPage {
        this.SelectedServiceElement.getSelectedServiceName(service)
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedValue = service.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedValue);
            });
        return this;
    }

    public verifySelectedServicePrice(price: string): ServiceSummaryPage {
        this.SelectedServiceElement.getSelectedServicePrice(price)
            .invoke('prop', 'outerText')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = price.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public verifySelectedServiceTime(time: string): ServiceSummaryPage {
        this.SelectedServiceElement.getSelectedServiceTime(time)
            .invoke('prop', 'outerText')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = time.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

    public verifyServiceSpecialist(specialist: string): ServiceSummaryPage {
        this.SelectedServiceElement.getSpecialistElement(specialist)
            .invoke('prop', 'outerText')
            .then((text) => {
                const normalizedText = text.replace(/\s/g, '');
                const normalizedPrice = specialist.replace(/\s/g, '');
                expect(normalizedText).to.include(normalizedPrice);
            });
        return this;
    }

}