import {BalanceTabComponent} from "./page-element/BalanceTabComponent";
import {BalanceApi} from "../../../../../backend/panel/balance/BalanceApi";

export class BalanceListPage {
    private static balanceComponent: BalanceTabComponent = new BalanceTabComponent()

    public static verifyActualBalance(): BalanceListPage {
        BalanceApi.getActualBalance().then(actualBalance => {
            const expectedSaldo: any = `Saldo ${actualBalance},00 zł Historia rozliczeń i powiązane karty płatnicze`
            this.balanceComponent.getActualBalance().assertElementTextNormalized(expectedSaldo)
        })
        return this
    }
}
