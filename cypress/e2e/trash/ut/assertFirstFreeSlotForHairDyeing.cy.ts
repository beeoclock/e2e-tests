describe('assertFirstFreeSlotForHairDyeing', function (): void {

    it('check assertFirstFreeSlotForHairDyeing', function (): void {
        cy.log("TEST: " + getNextHairDyeingSlots())
    })

    function getNextHairDyeingSlots(): string[] {
        let hour = 11;
        const minute = 12;
        let result: string[] = [];

        let isHalfHour: boolean;

        if (minute < 30) {
            isHalfHour = true;
        } else {
            isHalfHour = false;
            hour += 1;
        }

        while (true) {
            const slot = `${hour.toString().padStart(2, '0')}:${isHalfHour ? '30' : '00'}`;
            result.push(slot);

            if ((isHalfHour && hour === 19) || (!isHalfHour && hour === 20)) break;

            hour += 1;
        }

        return result;
    }
})