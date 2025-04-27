import {ServicesPages} from "../../../support/beeoclock/page-element/services/ServicesPages";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";

describe("Client app health check test", () => {
    const danishAddress = 'https://beeoclock.com/da/barbershop_brooklyn'
    const englishAddress = 'https://beeoclock.com/en/barbershop_brooklyn'
    const taiwanAddress = 'https://beeoclock.com/tw/barbershop_brooklyn'

    const danishTabName = 'Om os'
    const englishTabName = 'About us'
    const clientName = 'Barbershop Brooklyn'

    const emptyDomain = 'https://dev.beeoclock.com'
    const businessHeader = 'Rejestrowanie klientów online - automatyzacja biznesu!'

    before('clear', () => {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    })

    it('test 1 assert corrected danish page', function () {
        cy.visit(danishAddress)

        cy.document().then((doc) => {
            const langAttribute = doc.documentElement.getAttribute('lang');
            expect(langAttribute).to.equal('da');
        });
        ServicesPages.BookingSelectServicePage
            .verifyGivenHrefAddress('Sankt Mathias Gade, 72, Viborg, Danmark, 8800')
        assertLogo()
        assertBusinessName()
        assertUrl(danishAddress)
        assertDetailsTab(danishTabName)
    });

    it('test 2 assert corrected english page', function () {
        cy.visit(englishAddress);
        assertApiResponse()

        cy.document().then((doc) => {
            const langAttribute = doc.documentElement.getAttribute('lang');
            expect(langAttribute).to.equal('en');
        });
        ServicesPages.BookingSelectServicePage
            .verifyGivenHrefAddress('Sankt Mathias Gade, 72, Viborg, Denmark, 8800')
        assertLogo()
        assertBusinessName()
        assertUrl(englishAddress)
        assertDetailsTab(englishTabName)
    });

    it('test 3 assert corrected lang on the unsupported language', function () {
        cy.visit(taiwanAddress);

        cy.document().then((doc) => {
            const langAttribute = doc.documentElement.getAttribute('lang');
            expect(langAttribute).to.equal('en-US');
        });
    });

    it.skip('test 4 assert correct redirect //TODO BUG', function () {
        cy.visit(emptyDomain, { failOnStatusCode: false })

        let description: string = 'Rezerwacja spotkań online dla klientów.'

        cy.url().should('eq', emptyDomain + '/pl')

        cy.get('.hidden > [alt="Bee O`clock service details image"]')

        cy.document().then((doc) => {
            const langAttribute = doc.documentElement.getAttribute('lang')
            expect(langAttribute).to.equal('pl')
        })
        cy.contains('p', description)
    })

    function assertLogo() {
        cy.get('img').should('have.attr', 'src', 'https://storage.googleapis.com/bee-o-clock.appspot.com/media/65e6179d5b1828e7e9a05c53/profile/gallery/6606ed352ffe20d94e1baffd/original.jpeg?updatedAt=2024-03-29T16:32:53.856Z');
    }

    function assertBusinessName() {
        cy.get('h1').should('contain.text', clientName);
    }

    function assertUrl(address: string) {
        cy.url().should('include', address)
    }

    function assertDetailsTab(tabName: string) {
        const detailsTab = cy.get('.font-semibold.text-sm').find('h2').last()
        detailsTab.should('contain.text', tabName);
    }

    function assertApiResponse(): void {
        const getGivenClient: string = 'getGivenClient' + DateUtils.getCurrentTime()
        cy.intercept('GET', 'https://api.beeoclock.com/client/api/v1/client/barbershop_brooklyn?*').as(getGivenClient);
        cy.wait('@' + getGivenClient);
    }
});