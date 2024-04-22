import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListInstructorDto } from '../../models/responses/instructor/getListInstructorDto';

@Injectable({
  providedIn: 'root'
})
export abstract class InstructorBaseService {

  constructor() { }

  abstract getListInstructors(): Observable<GetListInstructorDto>;
}
