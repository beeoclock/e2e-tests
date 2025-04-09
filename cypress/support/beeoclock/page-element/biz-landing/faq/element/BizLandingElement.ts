export class BizLandingElement {

    public getElement(): any {
        return cy.get('#faq')
    }

    public getFaqList(): any {
        return cy.get('#faq-list')
    }

    public getFaqItem(index: number): any {
        return cy.get(`#faq-item-${index}`)
    }

    public getFaqItemTitle(index: number): any {
        return cy.get(`#faq-item-${index}`).find('.text-sm.font-bold ')
    }

    public getExpandButton(index: number): any {
        return this.getFaqItem(index).find('[name="bootstrapPlusCircle"]')
    }

    public getRollUpButton(index: number): any {
        return this.getFaqItem(index).find('[name="bootstrapDashCircle"]')
    }

    public getFaqItemBoldContent(index: number): any {
        return this.getFaqItem(index).find('.mb-8').find('.font-bold')
    }

    public getFaqItemContent(index: number): any {
        return this.getFaqItem(index).find('.mb-8')
            .find('.font-bold')
            .next('span')
    }
}