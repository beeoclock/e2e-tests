export enum PhotoResourceName {
    LOREM_IPSUM = 'Lorem-ipsum'
}

export class PhotoResourceHelper {

    public static getPhotoPath(photoName: PhotoResourceName): string {
        return `photo/${photoName}/${photoName}.png`
    }

    public static getPhotoCurrentSrc(photoName: PhotoResourceName, charsToSlice: number): void {
        switch (photoName) {
            case PhotoResourceName.LOREM_IPSUM:
                cy.fixture(`photo/${photoName}/${photoName}.txt`)
                    .then((src): void => {
                        const sliced = src.slice(0, charsToSlice);
                        cy.wrap(sliced).as('photoSrc');
                    });
                break;
            default:
                cy.wrap('not defined').as('photoSrc');
        }
    }
}