export class BizLandingCommonPage {

    public assertMainState(): BizLandingCommonPage {
        cy.get('app-root').invoke('prop', 'firstChild').then(firstChild => {
            const classList = firstChild.classList.value;
            expect(classList).to.equal('wrapper w-full flex justify-center flex-col items-center');
        });
        return this;
    }
}