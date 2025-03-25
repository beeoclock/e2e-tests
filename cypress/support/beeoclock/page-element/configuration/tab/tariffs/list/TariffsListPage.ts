import {TariffsListPageElement} from "./TariffsListPageElement";
import {TariffsNameEnum} from "../enum/TariffsNameEnum";
import {TariffsApiInterceptionHelper} from "../../../../../common/Interception/tariffs/TariffsApiInterceptionHelper";
import {LeftMenuPage} from "../../../left-menu/LeftMenuPage";

export class TariffsListPage {
    private tariffsComponent = TariffsListPageElement.TariffsComponent

    public verifyTariffsPrize(name: string, prize: string): TariffsListPage {
        this.tariffsComponent.getTariffsPrice(name)
            .invoke('prop', 'textContent')
            .then((textContent) => {
                const cleanedText = textContent.replace(/&nbsp;/g, '').replace(/\s+/g, ' ').trim();
                const cleanedPrize = prize.replace(/\s+/g, ' ').trim();
                expect(cleanedText).to.eq(cleanedPrize);
            });
        return this;
    }

    public verifyTariffsMember(name: string, member: string): TariffsListPage {

        this.tariffsComponent.getTariffsMemberCount(name)
            .contains('Członkowie ', member)

        this.tariffsComponent.getTariffsMemberCount(name)
            .find('.bi.bi-check-lg').should('be.visible')
        return this;
    }

    public verifyTariffFeature(name: string, feature: string): TariffsListPage {
        this.tariffsComponent.getTariffFeatures(name)
            .find('.bi.bi-check-lg').should('be.visible')

        this.tariffsComponent.getTariffFeatures(name)
            .contains('span', feature)
        return this;
    }

    public clickUpdateToGivenSlot(name: string): TariffsListPage {
        this.tariffsComponent.getTariffsByName(name)
            .contains('button', 'Zaktualizuj do ' + name).should('be.visible')
            .click();
        return this
    }

    public clickDowngradeToBasic(name: string): TariffsListPage {
        const updateTariff = TariffsApiInterceptionHelper.updateTariffs()
        this.tariffsComponent.getTariffsByName(name)
            .contains('button', 'Obniż do ' + name).should('be.visible')
            .click()
        cy.wait('@' + updateTariff).then(interception => {
            const request = interception.request

            expect(request.body.type).to.equal(TariffsNameEnum.BASIC)
            expect(request.body._id).to.equal('66916aa0c5875b0caba6c439')
            expect(request.body.pluginAttachment.includeAll).to.equal(false)
            expect(request.body.pluginAttachment.excludeAll).to.equal(false)

            expect(request.body).to.deep.include({
                _id: '66916aa0c5875b0caba6c439', //TODO change into enum
                type: TariffsNameEnum.BASIC,
                features: [
                    "unlimitedPlugins", "emailNotification", "smsNotification", "jsonLD",
                    "seoOptimization", "confirmationAfterUserPayment", "adminPanel",
                    "publicPage",
                ]
            })
        })

        LeftMenuPage.assertIsSynchronizationExecuted()
        LeftMenuPage.assertIsSynchronized(true)
        return this
    }

    public clickUpdateToProfessional(): TariffsListPage {
        const updateTariff = TariffsApiInterceptionHelper.updateTariffs()
        this.tariffsComponent.getTariffsByName(TariffsNameEnum.PROFESSIONAL)
            .contains('button', 'Zaktualizuj do ' + TariffsNameEnum.PROFESSIONAL).should('be.visible')
            .click()
            .then((): void => {
            
            })

        cy.wait('@' + updateTariff).then(interception => {
            const request = interception.request

            expect(request.body.features).to.have.length(10)
            expect(request.body.type).to.equal(TariffsNameEnum.PROFESSIONAL)
            expect(request.body._id).to.equal('66916aa0c5875b0caba6c440')

            expect(request.body).to.deep.include({
                _id: '66916aa0c5875b0caba6c440',
                type: TariffsNameEnum.PROFESSIONAL,
                features: [
                    "unlimitedPlugins", "emailNotification", "smsNotification", "jsonLD",
                    "seoOptimization", "confirmationAfterUserPayment", "adminPanel",
                    "publicPage", "assistantAI", "publicRestApi"
                ]
            })
        })
        LeftMenuPage.assertIsSynchronizationExecuted()
        LeftMenuPage.assertIsSynchronized(true)
        return this
    }

    public verifyGivenSlotIsSelected(name: string): TariffsListPage {
        this.tariffsComponent.getTariffsByName(name)
            .contains('button', 'Wybrane').should('be.visible')
            .and('be.disabled')
            .and('have.css', 'color', 'rgb(163, 163, 163)')
        return this;
    }

    public verifyGivenSlotIsOpenToUpgrade(name: string): TariffsListPage {
        this.tariffsComponent.getTariffsByName(name)
            .contains('button', 'Zaktualizuj do ' + name).should('be.visible')
            .and('have.css', 'background-color', 'rgb(255, 212, 41)')
        return this;
    }

    public verifyGivenSlotIsOpenToDowngrade(name: string): TariffsListPage {
        this.tariffsComponent.getTariffsByName(name)
            .contains('button', 'Obniż do ' + name).should('be.visible')
        return this;
    }
}