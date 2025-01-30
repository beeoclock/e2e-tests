import {ProductNameInputPage} from "./creation-form/ProductNameInput";
import {ProductDescriptionInput} from "./creation-form/ProductDescriptionInput";
import {AddCategoryButton} from "./creation-form/category/AddCategoryButton";
import {CategoryInput} from "./creation-form/category/CategoryInput";
import {CategorySaveButton} from "./creation-form/category/CategorySaveButton";
import {ProductPriceInput} from "./creation-form/ProductPriceInput";

export class ProductsCreationFormPageElement {

    public static ProductNameInputPage: ProductNameInputPage = new ProductNameInputPage()
    public static ProductDescriptionInput: ProductDescriptionInput = new ProductDescriptionInput()
    public static AddCategoryButton: AddCategoryButton = new AddCategoryButton()
    public static CategoryInput: CategoryInput = new CategoryInput()
    public static CategorySaveButton: CategorySaveButton = new CategorySaveButton()
    public static ProductPriceInput: ProductPriceInput = new ProductPriceInput()
}