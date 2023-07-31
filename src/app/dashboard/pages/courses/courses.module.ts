import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesDialogFormModule } from './components/courses-dialog-form/courses-dialog-form.module';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { RouterModule } from '@angular/router';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesTableComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesDialogFormModule,
    RouterModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
