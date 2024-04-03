import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateBootcampResponseModel } from '../models/responses/bootcamp/createBootcampResponseModel';
import { ListBootcampResponseModel } from '../models/responses/bootcamp/listBootcampResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {

  apiUrl="";

  constructor(private httpClient:HttpClient) { }
  getBootcamps():Observable<ListBootcampResponseModel[]>{
    return this.httpClient.get<ListBootcampResponseModel[]>(this.apiUrl);
  }
}
