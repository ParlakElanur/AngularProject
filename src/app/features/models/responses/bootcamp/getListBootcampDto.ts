import { PageResponse } from "../../../../core/models/pageResponse";
import { GetListBootcampResponse } from "./getListBootcampResponse";

export interface GetListBootcampDto extends PageResponse {
    items: GetListBootcampResponse[];
}