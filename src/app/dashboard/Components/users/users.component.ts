import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { Student } from './models';

const ELEMENT_DATA: Student[] = [
  {id: 1, name: 'Juri', surname: 'Han', email: 'hanJuri@testmail', password: '1235'}
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  public students: Student[] = ELEMENT_DATA;

  constructor(private matDialog: MatDialog) {}

  onCreateUser(): void {
    const dialogRef = this.matDialog.open(UserFormDialogComponent)

    dialogRef.afterClosed().subscribe({
      next: (v) => {
        if (v){
          this.students = [
            ...this.students,
            {
              id: this.students.length + 1,
              name: v.name,
              surname: v.surname,
              email: v.email,
              password: v.password
            }
          ]
        console.log('Recibimos el valor', v)
        } else {
          console.log('Se cancelo')
        }
      }
    })
  }

  onDeleteStudent(student: Student): void {
    if (confirm(`¿Esta seguro de eliminar a ${student.name}?`)) {
      this.students = this.students.filter((s) => s.id != student.id)
    }
  }

  studentToEdit(studentToEdit: Student): void {
    const dialogRef = this.matDialog.open(UserFormDialogComponent, {
      data: studentToEdit
    })

    dialogRef.afterClosed().subscribe({
      next: (data) => {
        if (data) {
          this.students = this.students.map((student) => {



            return student.id === studentToEdit.id 
            ? {...student, ...data}
            :  student
          })
        }
      }
    })
  }
}
