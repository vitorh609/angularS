import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { RegisterCoursesComponent } from './register-courses/register-courses.component';

const routes: Routes = [
  {path:'', component: CoursesComponent},
  {path: 'new', component: RegisterCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
