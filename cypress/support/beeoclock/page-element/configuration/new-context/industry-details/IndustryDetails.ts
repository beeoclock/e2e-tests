import { HealthCareIndustryDetails } from "./healthcare/HealthCareIndustryDetails";

export class IndustryDetails {
    public healthcare: HealthCareIndustryDetails;
    // public cosmetic: CosmeticIndustryDetails;
    // public learning: LearningIndustryDetails;
    // public other: OtherIndustryDetails;

    constructor() {
        this.healthcare = new HealthCareIndustryDetails();
        // this.cosmetic = new CosmeticIndustryDetails();
        // this.learning = new LearningIndustryDetails();
        // this.other = new OtherIndustryDetails();
    }
}
