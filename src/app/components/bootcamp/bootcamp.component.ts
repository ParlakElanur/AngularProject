import { Component, OnInit } from '@angular/core';
import { BootcampService } from '../../services/bootcamp.service';
import { ListBootcampResponseModel } from '../../models/responses/bootcamp/listBootcampResponseModel';

@Component({
  selector: 'app-bootcamp',
  standalone: true,
  imports: [],
  templateUrl: './bootcamp.component.html',
  styleUrl: './bootcamp.component.scss'
})
export class BootcampComponent implements OnInit {
  bootcamps: ListBootcampResponseModel[] = [];

  constructor(private bootcampService: BootcampService) { }
  ngOnInit(): void {
    this.getBootcamps();
  }
  getBootcamps() {
    this.bootcampService.getBootcamps().subscribe(response => {
      this.bootcamps = response;
    })
  }

}
