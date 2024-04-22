import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListBootcampDto } from '../../models/responses/bootcamp/getListBootcampDto';
import { PageRequest } from '../../../core/models/pageRequest';

@Injectable({
  providedIn: 'root'
})
export abstract class BootcampBaseService {

  constructor() { }

  abstract getListBootcamps(pageRequest: PageRequest): Observable<GetListBootcampDto>;

}
