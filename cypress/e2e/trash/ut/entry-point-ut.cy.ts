// import { DevEntryPointEnum } from "support/beeoclock/common/Interception/DevEntryPointEnum";
// import { ApiRequestHelper, Environment } from "../../../support/beeoclock/common/Interception/ApiRequestHelper";
// import {PreProdEntryPointEnum} from "../../../support/beeoclock/common/Interception/PreProdEntryPointEnum";
// import {ProdEntryPointEnum} from "../../../support/beeoclock/common/Interception/ProdEntryPointEnum";
//
// describe('api entry point UT', function (): void {
//
//     it('should test dev api entry point', (): void => {
//         const url: string = ApiRequestHelper.getApiEntryPoint(Environment.dev)
//         expect(url).to.equal(DevEntryPointEnum.API_ENTRY_POINT);
//     })
//
//     it('should test pre-prod api entry point', (): void => {
//         const url: string = ApiRequestHelper.getApiEntryPoint(Environment.pre_prod)
//         expect(url).to.equal(PreProdEntryPointEnum.API_ENTRY_POINT);
//     })
//
//     it('should test prod api entry point', (): void => {
//         const url: string = ApiRequestHelper.getApiEntryPoint(Environment.prod)
//         expect(url).to.equal(ProdEntryPointEnum.API_ENTRY_POINT);
//     })
// });
//
// describe('identity api entry pint UT', function (): void  {
//
//     it('should test dev api entry point', (): void => {
//         const url: string = ApiRequestHelper.getIdentityEntryPoint(Environment.dev)
//         expect(url).to.equal(DevEntryPointEnum.IDENTITY_API_ENTRY_POINT);
//     })
//
//     it('should test dev api entry point', (): void => {
//         const url: string = ApiRequestHelper.getIdentityEntryPoint(Environment.pre_prod)
//         expect(url).to.equal(PreProdEntryPointEnum.IDENTITY_API_ENTRY_POINT);
//     })
//
//     it('should test dev api entry point', (): void => {
//         const url: string = ApiRequestHelper.getIdentityEntryPoint(Environment.prod)
//         expect(url).to.equal(ProdEntryPointEnum.IDENTITY_API_ENTRY_POINT);
//     })
// })
//
// describe('tariff api entry point UT', function (): void {
//
//     it('should test dev tariff entry point', (): void => {
//         const url: string = ApiRequestHelper.getTariffsEntryPoint(Environment.dev);
//         expect(url).to.equal(DevEntryPointEnum.TARIFFS_ENTRY_POINT);
//     });
//
//     it('should test pre-prod tariff entry point', (): void => {
//         const url: string = ApiRequestHelper.getTariffsEntryPoint(Environment.pre_prod);
//         expect(url).to.equal(PreProdEntryPointEnum.TARIFFS_ENTRY_POINT);
//     });
//
//     it('should test prod tariff entry point', (): void => {
//         const url: string = ApiRequestHelper.getTariffsEntryPoint(Environment.prod);
//         expect(url).to.equal(ProdEntryPointEnum.TARIFFS_ENTRY_POINT);
//     });
// });
//
// describe('public page api entry point UT', function (): void {
//
//     it('should test dev public page entry point', (): void => {
//         const url: string = ApiRequestHelper.getPublicPageEntryPoint(Environment.dev);
//         expect(url).to.equal(DevEntryPointEnum.PUBLIC_PAGE_API_ENTRY_POINT);
//     });
//
//     it('should test pre-prod public page entry point', (): void => {
//         const url: string = ApiRequestHelper.getPublicPageEntryPoint(Environment.pre_prod);
//         expect(url).to.equal(PreProdEntryPointEnum.PUBLIC_PAGE_API_ENTRY_POINT);
//     });
//
//     it('should test prod public page entry point', (): void => {
//         const url: string = ApiRequestHelper.getPublicPageEntryPoint(Environment.prod);
//         expect(url).to.equal(ProdEntryPointEnum.PUBLIC_PAGE_API_ENTRY_POINT);
//     });
// });
