import { WineRatingSourceId } from "./wine-rating-source-id"
export class WineRatings{
    "wine_rating_id": number;
    "wine_rating_source_id": number;
    "item_wine_data_id": number;
    "rating": number;
    "source": WineRatingSourceId;
}