import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comission } from '../../models';
import { StudentService } from '../../../students/student.service';
import { Student } from '../../../students/models';
import { Store } from '@ngrx/store';
import { ComissionsActions } from '../../store/comissions.actions';


@Component({
  selector: 'app-comissions-detail',
  templateUrl: './comissions-detail.component.html',
  styles: [
  ]
})
export class ComissionsDetailComponent implements OnInit{
  public comissionID?: number;
  public comission?: Comission;
  students: Student[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ComissionsActions.loadComissionDetail({ comissionId: this.activatedRoute.snapshot.params['id'] }))
    this.studentService.getStudentsByComissionId(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (v) => {
        this.students = v;
      }
    })
  }


}
