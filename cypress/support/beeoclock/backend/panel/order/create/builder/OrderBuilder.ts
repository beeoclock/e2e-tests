export class OrderBuilder {
    private order: any;

    constructor() {
        this.order = {
            _id: '',
            businessNote: '',
            createdAt: new Date().toISOString(),
            meta: { object: 'OrderMetaDto', history: [] },
            object: 'OrderDto',
            products: [],
            services: [],
            state: 'active',
            stateHistory: [],
            status: 'confirmed',
            updatedAt: new Date().toISOString(),
            notificationSettings: { sendNotification: false, sendTypes: [], sendReceivers: ['business', 'client'] }
        };
    }

    setId(id: string) {
        this.order._id = id;
        return this;
    }

    setBusinessNote(note: string) {
        this.order.businessNote = note;
        return this;
    }

    addService(service: any) {
        this.order.services.push(service);
        return this;
    }

    addProduct(product: any) {
        this.order.products.push(product);
        return this;
    }

    setStatus(status: string) {
        this.order.status = status;
        return this;
    }

    setState(state: string) {
        this.order.state = state;
        return this;
    }

    build() {
        return this.order;
    }
}

