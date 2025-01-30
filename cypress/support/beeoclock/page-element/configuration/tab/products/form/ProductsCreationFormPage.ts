import {ProductsCreationFormPageElement} from "./ProductsCreationFormPageElement";

export class ProductsCreationFormPage {

    public typeProductName(name: string): ProductsCreationFormPage {
        ProductsCreationFormPageElement.ProductNameInputPage.getElement()
            .type(name);
        return this;
    }


}