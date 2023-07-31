import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../models';

@Component({
  selector: 'app-courses-dialog-form',
  templateUrl: './courses-dialog-form.component.html',
  styleUrls: ['./courses-dialog-form.component.scss']
})
export class CoursesDialogFormComponent {
  editingCourse?: Course
  nameControl = new FormControl<string | null>(null, [Validators.required])
  surnameControl = new FormControl<string | null>(null, [Validators.required])
  emailControl = new FormControl<string | null>(null, [Validators.required])
  passwordControl = new FormControl<string | null>(null, [Validators.required])

  courseForm = new FormGroup ({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl
  })

  constructor(private dialogRef: MatDialogRef<CoursesDialogFormComponent>,
      @Inject(MAT_DIALOG_DATA) private data?: Course,) {
       if (this.data) {
        this.editingCourse = this.data
        this.nameControl.setValue(this.data.name)
        this.surnameControl.setValue(this.data.surname)
        this.emailControl.setValue(this.data.email)
        this.passwordControl.setValue(this.data.password)
       }
  }

  onSubmit(): void {
    
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched()
    } else {
      this.dialogRef.close(this.courseForm.value)
    }
  }
}
