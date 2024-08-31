//this - gets action button element
// export class OrderActionButton {
//     public getElement(orderId: string): any {
//         return cy.get(`#table-row-${orderId}`)
//     }
//this get just main component
export class OrderActionButton {
    public getElement(orderId: string): any {
        return cy.get(`app-card-item-order-component[id="${orderId}"]`)
            .scrollIntoView().should('be.visible')
    }
}

// export class OrderActionButton {
//     public getElement(orderId: string): any {
//         // @ts-ignore
//         return cy.get(`#\\36 ${orderId} > .border-2 > :nth-child(1) > .flex-col.cursor-pointer > app-list-service-form-card-order-component.flex > :nth-child(1) > .bg-white > .flex-col > .gap-1 > .w-8`)
//             .scrollIntoView().should('be.visible')
//     }

// }