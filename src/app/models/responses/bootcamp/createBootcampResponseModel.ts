export interface CreateBootcampResponseModel {
    id:number;
    name: string;
    instructorId: string;
    startDate: Date;
    endDate: Date;
    bootcampStateId: number;
}