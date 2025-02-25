import { IMetaDto } from "../../../state/interface/IMetaDto";
import { IStateHistory } from "../../../state/interface/IStateHistory";
import { IHistoryEntryDto } from "../interfaces/IHistoryEntryDto";
import { IImageDto } from "../interfaces/IImageDto";
import { IImageMetadataDto } from "../interfaces/IImageMetadataDto";
import { IOrderAppointmentDetailsDto } from "../interfaces/IOrderAppointmentDetailsDto";
import { IOrderProductDto } from "../interfaces/IOrderProductDto";
import { IOrderServiceDto } from "../interfaces/IOrderServiceDto";
import { IProductPriceDto } from "../interfaces/IProductPriceDto";
import { IServiceDto } from "../interfaces/IServiceDto";
import {StateEnum} from "../../enum/StateEnum";
import { IProductDto } from "../interfaces/IProductDto";
import { ILanguageVersionDto } from "../interfaces/ILanguageVersionDto";

class HistoryEntryDtoBuilder {
    private object: string = '';
    private issuer: IMetaDto = { object: '', history: [] };
    private reason: string = '';
    private value: string = '';
    private createdAt: string = '';
    private _v: number = 0;

    setObject(object: string): this {
        this.object = object;
        return this;
    }

    setIssuer(issuer: IMetaDto): this {
        this.issuer = issuer;
        return this;
    }

    setReason(reason: string): this {
        this.reason = reason;
        return this;
    }

    setValue(value: string): this {
        this.value = value;
        return this;
    }

    setCreatedAt(createdAt: string): this {
        this.createdAt = createdAt;
        return this;
    }

    setV(_v: number): this {
        this._v = _v;
        return this;
    }

    build(): IHistoryEntryDto {
        return {
            object: this.object,
            issuer: this.issuer,
            reason: this.reason,
            value: this.value,
            createdAt: this.createdAt,
            _v: this._v,
        };
    }
}

class MetaDtoBuilder {
    private object: string = '';
    private history: IHistoryEntryDto[] = [];

    setObject(object: string): this {
        this.object = object;
        return this;
    }

    setHistory(history: IHistoryEntryDto[]): this {
        this.history = history;
        return this;
    }

    build(): IMetaDto {
        return {
            object: this.object,
            history: this.history,
        };
    }
}

class ProductPriceDtoBuilder {
    private object: string = '';
    private value: number = 0;
    private currency: string = '';

    setObject(object: string): this {
        this.object = object;
        return this;
    }

    setValue(value: number): this {
        this.value = value;
        return this;
    }

    setCurrency(currency: string): this {
        this.currency = currency;
        return this;
    }

    build(): IProductPriceDto {
        return {
            object: this.object,
            value: this.value,
            currency: this.currency,
        };
    }
}

class ImageMetadataDtoBuilder {
    private object: string = '';
    private original: boolean = false;
    private format: string = '';
    private height: number = 0;
    private width: number = 0;
    private size: number = 0;

    setObject(object: string): this {
        this.object = object;
        return this;
    }

    setOriginal(original: boolean): this {
        this.original = original;
        return this;
    }

    setFormat(format: string): this {
        this.format = format;
        return this;
    }

    setHeight(height: number): this {
        this.height = height;
        return this;
    }

    setWidth(width: number): this {
        this.width = width;
        return this;
    }

    setSize(size: number): this {
        this.size = size;
        return this;
    }

    build(): IImageMetadataDto {
        return {
            object: this.object,
            original: this.original,
            format: this.format,
            height: this.height,
            width: this.width,
            size: this.size,
        };
    }
}

class ImageDtoBuilder {
    private _version: string = '';
    private _id: string = '';
    private stateHistory: IStateHistory[] = [];
    private state: string = '';
    private createdAt: string = '';
    private updatedAt: string = '';
    private object: string = '';
    private url: string = '';
    private mediaType: string = '';
    private metadata: IImageMetadataDto = { object: '', original: false, format: '', height: 0, width: 0, size: 0 };

    setVersion(_version: string): this {
        this._version = _version;
        return this;
    }

    setId(_id: string): this {
        this._id = _id;
        return this;
    }

    setStateHistory(stateHistory: IStateHistory[]): this {
        this.stateHistory = stateHistory;
        return this;
    }

    setState(state: string): this {
        this.state = state;
        return this;
    }

    setCreatedAt(createdAt: string): this {
        this.createdAt = createdAt;
        return this;
    }

    setUpdatedAt(updatedAt: string): this {
        this.updatedAt = updatedAt;
        return this;
    }

    setObject(object: string): this {
        this.object = object;
        return this;
    }

    setUrl(url: string): this {
        this.url = url;
        return this;
    }

    setMediaType(mediaType: string): this {
        this.mediaType = mediaType;
        return this;
    }

    setMetadata(metadata: IImageMetadataDto): this {
        this.metadata = metadata;
        return this;
    }

    build(): IImageDto {
        return {
            _version: this._version,
            _id: this._id,
            stateHistory: this.stateHistory,
            state: this.state,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            object: this.object,
            url: this.url,
            mediaType: this.mediaType,
            metadata: this.metadata,
        };
    }
}

class ProductDtoBuilder {
    private _version: string = '';
    private _id: string = '';
    private stateHistory: IStateHistory[] = [];
    private state: string = '';
    private createdAt: string = '';
    private updatedAt: string = '';
    private object: string = '';
    private sku: string = '';
    private languageVersions: ILanguageVersionDto[] = [];
    private price: IProductPriceDto = { object: '', value: 0, currency: '' };
    private tags: string[] = [];
    private images: IImageDto[] = [];
    private order: number = 0;

    setVersion(_version: string): this {
        this._version = _version;
        return this;
    }

    setId(_id: string): this {
        this._id = _id;
        return this;
    }

    setStateHistory(stateHistory: IStateHistory[]): this {
        this.stateHistory = stateHistory;
        return this;
    }

    setState(state: string): this {
        this.state = state;
        return this;
    }

    setCreatedAt(createdAt: string): this {
        this.createdAt = createdAt;
        return this;
    }

    setUpdatedAt(updatedAt: string): this {
        this.updatedAt = updatedAt;
        return this;
    }

    setObject(object: string): this {
        this.object = object;
        return this;
    }

    setSku(sku: string): this {
        this.sku = sku;
        return this;
    }

    setLanguageVersions(languageVersions: ILanguageVersionDto[]): this {
        this.languageVersions = languageVersions;
        return this;
    }

    setPrice(price: IProductPriceDto): this {
        this.price = price;
        return this;
    }

    setTags(tags: string[]): this {
        this.tags = tags;
        return this;
    }

    setImages(images: IImageDto[]): this {
        this.images = images;
        return this;
    }

    setOrder(order: number): this {
        this.order = order;
        return this;
    }

    build(): {
        _version: string;
        _id: string;
        stateHistory: IStateHistory[];
        state: string;
        createdAt: string;
        updatedAt: string;
        object: string;
        sku: string;
        languageVersions: ILanguageVersionDto[];
        price: IProductPriceDto;
        tags: string[];
        images: IImageDto[];
        order: number
    } {
        return {
            _version: this._version,
            _id: this._id,
            stateHistory: this.stateHistory,
            state: this.state,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            object: this.object,
            sku: this.sku,
            languageVersions: this.languageVersions,
            price: this.price,
            tags: this.tags,
            images: this.images,
            order: this.order,
        };
    }
}

class LanguageVersionDtoBuilder {
    private object: string = '';
    private title: string = '';
    private description: string = '';
    private language: string = '';

    setObject(object: string): this {
        this.object = object;
        return this;
    }

    setTitle(title: string): this {
        this.title = title;
        return this;
    }

    setDescription(description: string): this {
        this.description = description;
        return this;
    }

    setLanguage(language: string): this {
        this.language = language;
        return this;
    }

    build(): ILanguageVersionDto {
        return {
            object: this.object,
            title: this.title,
            description: this.description,
            language: this.language,
        };
    }
}

class OrderProductDtoBuilder {
    private _version: string = '';
    private _id: string = '';
    private stateHistory: IStateHistory[] = [];
    private state: StateEnum
    private createdAt: string = '';
    private updatedAt: string = '';
    private object: string = '';
    private quantity: number = 0;
    private orderServiceId: string = '';
    // @ts-ignore
    private productSnapshot: IProductDto = { _version: '', _id: '', stateHistory: [], state: '', createdAt: '', updatedAt: '', object: '', sku: '', languageVersions: [], price: { object: '', value: 0, currency: '' }, tags: [], images: [], order: 0 };
    private meta: IMetaDto = { object: '', history: [] };
    private paymentStatus: string = '';

    setVersion(_version: string): this {
        this._version = _version;
        return this;
    }

    setId(_id: string): this {
        this._id = _id;
        return this;
    }

    setStateHistory(stateHistory: IStateHistory[]): this {
        this.stateHistory = stateHistory;
        return this;
    }

    setState(state: StateEnum): this {
        this.state = state;
        return this;
    }

    setCreatedAt(createdAt: string): this {
        this.createdAt = createdAt;
        return this;
    }

    setUpdatedAt(updatedAt: string): this {
        this.updatedAt = updatedAt;
        return this;
    }

    setObject(object: string): this {
        this.object = object;
        return this;
    }

    setQuantity(quantity: number): this {
        this.quantity = quantity;
        return this;
    }

    setOrderServiceId(orderServiceId: string): this {
        this.orderServiceId = orderServiceId;
        return this;
    }

    setProductSnapshot(productSnapshot: IProductDto): this {
        this.productSnapshot = productSnapshot;
        return this;
    }

    setMeta(meta: IMetaDto): this {
        this.meta = meta;
        return this;
    }

    setPaymentStatus(paymentStatus: string): this {
        this.paymentStatus = paymentStatus;
        return this;
    }

    build(): IOrderProductDto {
        return {
            _version: this._version,
            _id: this._id,
            stateHistory: this.stateHistory,
            state: this.state,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            object: this.object,
            quantity: this.quantity,
            orderServiceId: this.orderServiceId,
            productSnapshot: this.productSnapshot,
            meta: this.meta,
            paymentStatus: this.paymentStatus,
        };
    }
}

class OrderServiceDtoBuilder {
    private _version: string = '';
    private _id: string = '';
    private stateHistory: IStateHistory[] = [];
    private state: string = '';
    private createdAt: string = '';
    private updatedAt: string = '';
    private object: string = '';
    private orderId: string = '';
    private serviceSnapshot: IServiceDto = { _version: '', _id: '', stateHistory: [], state: '', createdAt: '', updatedAt: '', object: '', configuration: { object: '', duration: { object: '', durationVersionType: '' } }, presentation: { object: '', banners: [], color: '' }, prepaymentPolicy: { object: '', isRequired: false, isPercentage: false, value: '', minimalCancelTime: '' }, languageVersions: [], durationVersions: [], schedules: [], order: 0 };
    private orderAppointmentDetails: IOrderAppointmentDetailsDto = { object: '', start: '', end: '', type: '', languageCodes: [], attachments: [], specialists: [], attendees: [], locations: [], timeZone: '', createdAt: '', updatedAt: '' };
    private status: string = '';
    private customerNote: string = '';
    private meta: IMetaDto = { object: '', history: [] };
    private paymentStatus: string = '';

    setVersion(_version: string): this {
        this._version = _version;
        return this;
    }

    setId(_id: string): this {
        this._id = _id;
        return this;
    }

    setStateHistory(stateHistory: IStateHistory[]): this {
        this.stateHistory = stateHistory;
        return this;
    }

    setState(state: string): this {
        this.state = state;
        return this;
    }

    setCreatedAt(createdAt: string): this {
        this.createdAt = createdAt;
        return this;
    }

    setUpdatedAt(updatedAt: string): this {
        this.updatedAt = updatedAt;
        return this;
    }

    setObject(object: string): this {
        this.object = object;
        return this;
    }

    setOrderId(orderId: string): this {
        this.orderId = orderId;
        return this;
    }

    setServiceSnapshot(serviceSnapshot: IServiceDto): this {
        this.serviceSnapshot = serviceSnapshot;
        return this;
    }

    setOrderAppointmentDetails(orderAppointmentDetails: IOrderAppointmentDetailsDto): this {
        this.orderAppointmentDetails = orderAppointmentDetails;
        return this;
    }

    setStatus(status: string): this {
        this.status = status;
        return this;
    }

    setCustomerNote(customerNote: string): this {
        this.customerNote = customerNote;
        return this;
    }

    setMeta(meta: IMetaDto): this {
        this.meta = meta;
        return this;
    }

    setPaymentStatus(paymentStatus: string): this {
        this.paymentStatus = paymentStatus;
        return this;
    }

    build(): IOrderServiceDto {
        return {
            _version: this._version,
            _id: this._id,
            stateHistory: this.stateHistory,
            state: this.state,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            object: this.object,
            orderId: this.orderId,
            serviceSnapshot: this.serviceSnapshot,
            orderAppointmentDetails: this.orderAppointmentDetails,
            status: this.status,
            customerNote: this.customerNote,
            meta: this.meta,
            paymentStatus: this.paymentStatus,
        };
    }
}



