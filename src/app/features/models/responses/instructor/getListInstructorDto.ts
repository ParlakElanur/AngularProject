import { PageResponse } from "../../../../core/models/pageResponse";
import { GetListInstructorResponse } from "./getListInstructorResponse";

export interface GetListInstructorDto extends PageResponse{
    items : GetListInstructorResponse[];
}