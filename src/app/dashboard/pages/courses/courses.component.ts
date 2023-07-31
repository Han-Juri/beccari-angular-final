import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogFormComponent } from './components/courses-dialog-form/courses-dialog-form.component';
import { Course } from './models';
import { CoursesService } from './courses.service';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  public courses: Observable<Course[]>;

  constructor(private matDialog: MatDialog, private courseService: CoursesService, private notifier: NotifierService) {
    
    this.courseService.loadCourses()
    this.courses = this.courseService.getCourses()
  }

  onCreateCourse(): void {
    const dialogRef = this.matDialog.open(CoursesDialogFormComponent)

    dialogRef.afterClosed().subscribe({
      next: (v) => {
        if (v){
          this.courseService.createCourse({
              name: v.name,
              email: v.email,
              password: v.password,
              surname: v.surname,
            });
        }
      }
    })
  }

  onDeleteCourse(courseToDelete: Course): void {
    if (confirm(`¿Esta seguro de eliminar a ${courseToDelete.name}?`)) {
      this.courseService.deleteCourseByID(courseToDelete.id)
    }
  }

  courseToEdit(courseToEdit: Course): void {
    const dialogRef = this.matDialog.open(CoursesDialogFormComponent, {
      data: courseToEdit
    })

    dialogRef.afterClosed().subscribe({
      next: (courseUpdated) => {
        if (courseUpdated) {
          this.courseService.updateCourseByID(courseToEdit.id, courseUpdated)
        }
      }
    })
  }
}
