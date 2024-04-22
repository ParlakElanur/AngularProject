import { Injectable } from '@angular/core';
import { InstructorBaseService } from '../abstracts/instructor-base.service';
import { Observable } from 'rxjs';
import { GetListInstructorDto } from '../../models/responses/instructor/getListInstructorDto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructorService extends InstructorBaseService {

  apiUrl = "http://localhost:60805/api/Instructors?PageIndex=0&PageSize=5";

  constructor(private httpClient: HttpClient) { super() }

  override getListInstructors(): Observable<GetListInstructorDto> {
    return this.httpClient.get<GetListInstructorDto>(this.apiUrl);
  }

}
