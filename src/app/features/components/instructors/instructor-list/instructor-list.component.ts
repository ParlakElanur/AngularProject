import { Component, OnInit } from '@angular/core';
import { GetListInstructorResponse } from '../../../models/responses/instructor/getListInstructorResponse';
import { InstructorService } from '../../../services/concretes/instructor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instructor-list.component.html',
  styleUrl: './instructor-list.component.scss'
})
export class InstructorListComponent implements OnInit {
  

  instructors: GetListInstructorResponse[] = [];
  constructor(private instructorService:InstructorService) { }

  ngOnInit(): void {
    this.getListInstructors();
  }
  getListInstructors(){
    this.instructorService.getListInstructors().subscribe(response=>{
      this.instructors=response.items;
    })
  }
}
