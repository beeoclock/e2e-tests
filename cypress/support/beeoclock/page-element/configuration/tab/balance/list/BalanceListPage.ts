import {BalanceTabComponent} from "./page-element/BalanceTabComponent";
import {BalanceApi} from "../../../../../backend/panel/balance/BalanceApi";

export class BalanceListPage {
    private static balanceComponent: BalanceTabComponent = new BalanceTabComponent()

    public static verifyActualBalance(): BalanceListPage {
        BalanceApi.getActualBalance().then((actualBalanceRaw: any) => {
            const actualBalance: number = Number(actualBalanceRaw)
            const formatted: string = this.formatBalance(actualBalance)
            const expectedSaldo = `Saldo ${formatted} Historia rozliczeń i powiązane karty płatnicze`
            cy.log("EXPECT: " + expectedSaldo)

            this.balanceComponent.getActualBalance().invoke('prop', 'innerText').then((innerText: string) => {
                const normalize = (text: string): string =>
                    text
                        .replace(/\u00A0/g, '')
                        .replace(/\s/g, '')
                        .trim();

                expect(normalize(innerText)).to.include(normalize(expectedSaldo))
            })
        })
        return this
    }


    public static verifyBalance(balance: number): BalanceListPage {
        const formatted = this.formatBalance(balance)
        this.balanceComponent.getActualBalance().assertElementText(`Saldo ${formatted} Historia rozliczeń i powiązane karty płatnicze`)
        return this
    }

    public static formatBalance = (amount: number): string => {
        return amount.toLocaleString('pl-PL', {
            style: 'currency',
            currency: 'PLN',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).replace(/\u00A0/g, ' ');
    };
}
