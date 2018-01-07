import { ItemType } from "./item-type";
import { ItemCategory } from "./item-category";
import { WineData } from "./wine-data";
export class WineItem {
    "item_id": number;
    "restaurant_id": number;
    "item_type_id": number;
    "item_category_id": number;
    "image_id": number;
    "name": string;
    "description": string;
    "price": number;
    "in_stock": number;
    "position": number;
    "created": string;
    "updated": string;
    "item_type": ItemType;
    "item_category": ItemCategory;
    "image": string;
    "additional_images": String[];
    "wine_data": WineData;
}