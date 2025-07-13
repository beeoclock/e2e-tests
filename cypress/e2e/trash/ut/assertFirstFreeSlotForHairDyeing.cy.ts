describe('assertFirstFreeSlotForHairDyeing', function () {

    it('check assertFirstFreeSlotForHairDyeing', function () {
        cy.log("TEST: " + assertFirstFreeSlotForHairDyeing())
    })

    function assertFirstFreeSlotForHairDyeing(): string[] {
        // const now = new Date();
        let hour: number = 17 //now.getHours();
        const minute: number = 19 //now.getMinutes();

        if (minute > 0) {
            hour += 1;
        }

        const result: string[] = [];

        for (let h = hour; h <= 20; h++) {
            if (h >= 0 && h <= 20) {
                result.push(`${h.toString().padStart(2, '0')}:00`);
            }
        }
        return result;
    }
})