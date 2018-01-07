import { WineRatings } from "./wine-ratings";
import { WineRegion } from "./wine-region";
import { WineCountry } from "./wine-country";
import { WineType } from "./wine-type";

export class WineData{
    "item_wine_data_id": number;
    "item_id": number;
    "wine_type_id": number;
    "wine_country_id": number;
    "wine_region_id": number;
    "year": number;
    "bin_number": number;
    "story": string;
    "bottle_size": number;
    "is_club": number;
    "is_btg": number;
    "is_sold_by_glass": number;
    "is_half_glass_special": number;
    "discounted_price": number;
    "glass_price": number;
    "original_sale_price": number;
    "format": string;
    "average_rating": number;
    "wine_type": WineType;
    "wine_country": WineCountry;
    "wine_region": WineRegion;
    "wine_ratings": WineRatings[];
}