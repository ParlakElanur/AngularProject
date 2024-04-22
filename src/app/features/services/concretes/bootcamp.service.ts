import { Injectable } from '@angular/core';
import { BootcampBaseService } from '../abstracts/bootcamp-base.service';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetListBootcampDto } from '../../models/responses/bootcamp/getListBootcampDto';
import { environment } from '../../../../environments/environment.development';
import { PageRequest } from '../../../core/models/pageRequest';

@Injectable({
  providedIn: 'root'
})
export class BootcampService extends BootcampBaseService {

  // apiUrl: string = "http://localhost:60805/api/Bootcamps?PageIndex=0&PageSize=5";
  apiUrl: string = `${environment.API_URL}/Bootcamps`;

  constructor(private httpClient: HttpClient) { super() }

  override getListBootcamps(pageRequest: PageRequest): Observable<GetListBootcampDto> {
    const newRequest: { [key: string]: string | number } = {
      pageIndex: pageRequest.page,
      pageSize: pageRequest.pageSize
    };
    return this.httpClient.get<GetListBootcampDto>(this.apiUrl, {
      params: newRequest
    }).pipe(
      map((response) => {
        const newResponse: GetListBootcampDto = {
          index: pageRequest.page,
          size: pageRequest.pageSize,
          count: response.count,
          hasNext: response.hasNext,
          hasPrevious: response.hasPrevious,
          items: response.items,
          pages: response.pages
        };
        return newResponse;
      })
    )  
  }

}
