import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { BootcampListComponent } from '../../features/components/bootcamps/bootcamp-list/bootcamp-list.component';
import { RouterOutlet } from '@angular/router';
import { InstructorListComponent } from '../../features/components/instructors/instructor-list/instructor-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,BootcampListComponent,InstructorListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
