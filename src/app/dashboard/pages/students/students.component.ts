import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormDialogComponent } from './components/student-form-dialog/student-form-dialog.component';
import { Student } from './models';
import { StudentService } from './student.service';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  public students: Observable<Student[]>;

  constructor(private matDialog: MatDialog, private studentService: StudentService, private notifier: NotifierService) {
    
    this.studentService.loadStudents()
    this.students = this.studentService.getStudents()
  }

  onCreateStudent(): void {
    const dialogRef = this.matDialog.open(StudentFormDialogComponent)

    dialogRef.afterClosed().subscribe({
      next: (v) => {
        if (v){
          this.studentService.createStudent({
              name: v.name,
              email: v.email,
              password: v.password,
              surname: v.surname,
            });
        }
      }
    })
  }

  onDeleteStudent(studentToDelete: Student): void {
    if (confirm(`¿Esta seguro de eliminar a ${studentToDelete.name}?`)) {
      this.studentService.deleteStudentByID(studentToDelete.id)
    }
  }

  studentToEdit(studentToEdit: Student): void {
    const dialogRef = this.matDialog.open(StudentFormDialogComponent, {
      data: studentToEdit
    })

    dialogRef.afterClosed().subscribe({
      next: (studentUpdated) => {
        if (studentUpdated) {
          this.studentService.updateStudentByID(studentToEdit.id, studentUpdated)
        }
      }
    })
  }

}
