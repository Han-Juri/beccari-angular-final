import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Comission } from '../../models';

@Component({
  selector: 'app-comissions-dialog-form',
  templateUrl: './comissions-dialog-form.component.html',
  styleUrls: ['./comissions-dialog-form.component.scss']
})
export class ComissionsDialogFormComponent {
  editingComission?: Comission
  nameControl = new FormControl<string | null>(null, [Validators.required])
  surnameControl = new FormControl<string | null>(null, [Validators.required])
  emailControl = new FormControl<string | null>(null, [Validators.required])
  passwordControl = new FormControl<string | null>(null, [Validators.required])

  comissionForm = new FormGroup ({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl
  })

  constructor(private dialogRef: MatDialogRef<ComissionsDialogFormComponent>,
      @Inject(MAT_DIALOG_DATA) private data?: Comission,) {
       if (this.data) {
        this.editingComission = this.data
        this.nameControl.setValue(this.data.name)
        this.surnameControl.setValue(this.data.surname)
        this.emailControl.setValue(this.data.email)
        this.passwordControl.setValue(this.data.password)
       }
  }

  onSubmit(): void {
    
    if (this.comissionForm.invalid) {
      this.comissionForm.markAllAsTouched()
    } else {
      this.dialogRef.close(this.comissionForm.value)
    }
  }
}
