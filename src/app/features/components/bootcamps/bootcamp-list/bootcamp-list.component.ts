import { Component, OnInit } from '@angular/core';
import { BootcampService } from '../../../services/concretes/bootcamp.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterBoocampPipe } from '../../../../shared/pipes/filter-boocamp.pipe';
import { GetListBootcampResponse } from '../../../models/responses/bootcamp/getListBootcampResponse';
import { PageRequest } from '../../../../core/models/pageRequest';
import { GetListBootcampDto } from '../../../models/responses/bootcamp/getListBootcampDto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bootcamp-list',
  standalone: true,
  imports: [FormsModule, CommonModule, FilterBoocampPipe, RouterModule],
  templateUrl: './bootcamp-list.component.html',
  styleUrl: './bootcamp-list.component.scss'
})
export class BootcampListComponent implements OnInit {

  bootcampList: GetListBootcampDto = {
    index: 0,
    size: 0,
    count: 0,
    hasNext: false,
    hasPrevious: false,
    pages: 0,
    items: []
  };

  // bootcamps: GetListBootcampResponse[] = [];
  readonly PAGE_SIZE = 3;
  currentPageNumber !: number;

  filterText = "";

  constructor(private bootcampService: BootcampService) { }
  ngOnInit(): void {
    this.getListBootcamps({ page: 0, pageSize: this.PAGE_SIZE });
  }
  getListBootcamps(pageRequest: PageRequest) {
    this.bootcampService.getListBootcamps(pageRequest).subscribe(response => {
      this.bootcampList = response;
      this.updateCurrentPageNumber();
    })
  }
  onViewMoreClicked(): void {
    const nextPageIndex = this.bootcampList.index + 1;
    const pageSize = this.bootcampList.size;

    this.getListBootcamps({ page: nextPageIndex, pageSize })
    this.updateCurrentPageNumber();
  }
  onPreviousPageClicked(): void {
    const nextPageIndex = this.bootcampList.index - 1;
    const pageSize = this.bootcampList.size;

    this.getListBootcamps({ page: nextPageIndex, pageSize: pageSize })
    this.updateCurrentPageNumber();
  }
  updateCurrentPageNumber(): void {
    this.currentPageNumber = this.bootcampList.index + 1;
  }

}
