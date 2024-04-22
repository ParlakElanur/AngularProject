import { Pipe, PipeTransform } from '@angular/core';
import { GetListBootcampResponse } from '../../features/models/responses/bootcamp/getListBootcampResponse';

@Pipe({
  name: 'filterBoocamp',
  standalone: true
})
export class FilterBoocampPipe implements PipeTransform {

  transform(value: GetListBootcampResponse[], filterText: string): GetListBootcampResponse[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText? value.filter((b:GetListBootcampResponse)=>b.name.toLocaleLowerCase().indexOf(filterText) !== -1):value;
  }

}
