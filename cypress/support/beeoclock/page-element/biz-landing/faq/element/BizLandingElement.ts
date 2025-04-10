export class BizLandingElement {

    public getElement(): any {
        return cy.get('#faq')
            .scrollIntoView().should('be.visible')
    }

    public getFaqList(): any {
        return cy.get('#faq-list')
            .scrollIntoView().should('be.visible')
    }

    public getFaqItem(index: number): any {
        return cy.get(`#faq-item-${index}`)
            .scrollIntoView().should('be.visible')
    }

    public getFaqItemTitle(index: number): any {
        return cy.get(`#faq-item-${index}`).find('.text-sm.font-bold')
    }

    public getExpandButton(index: number): any {
        return this.getFaqItem(index).find('[name="bootstrapPlusCircle"]')
    }

    public getRollUpButton(index: number): any {
        return this.getFaqItem(index).find('[name="bootstrapDashCircle"]')
            .scrollIntoView().should('be.visible')
    }

    public getFaqItemBoldContent(index: number): any {
        return this.getFaqItem(index).find('.mb-8').find('.font-bold')
    }

    public getFaqItemContent(index: number): any {
        return this.getFaqItem(index).find('.mb-8')
            .find('.font-bold')
            .next('span')
            .scrollIntoView().should('be.visible')
    }

    public getFaqItemLi(index: number, liIndex: number): any {
        return this.getFaqItem(index)
            .find('li').eq(liIndex)
            .scrollIntoView().should('be.visible')
    }

    public getFaqItemP(index: number, pIndex: number): any {
        return this.getFaqItem(index)
            .find('p').eq(pIndex)
            .scrollIntoView().should('be.visible')
    }

    public getFaqItemLiLength(index: number): any {
        return this.getFaqItem(index)
            .find('li')
            .its('length')
    }
}