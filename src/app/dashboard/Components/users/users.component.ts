import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { Student } from './models';
import { StudentService } from './student.service';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { Observable } from 'rxjs';

//const ELEMENT_DATA: Student[] =

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  public students: Observable<Student[]>;

  constructor(private matDialog: MatDialog, private studentService: StudentService, private notifier: NotifierService) {
    
    this.studentService.loadStudents()
    this.students = this.studentService.getUsers()
  }

  onCreateUser(): void {
    const dialogRef = this.matDialog.open(UserFormDialogComponent)

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
    const dialogRef = this.matDialog.open(UserFormDialogComponent, {
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
