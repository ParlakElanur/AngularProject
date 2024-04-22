import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InstructorListComponent } from './features/components/instructors/instructor-list/instructor-list.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomePageComponent },
    { path: 'homepage', component: HomePageComponent }
];
