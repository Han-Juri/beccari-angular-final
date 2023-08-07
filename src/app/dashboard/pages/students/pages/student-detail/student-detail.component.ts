import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../student.service';
import { Student } from '../../models';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styles: [
  ]
})
export class StudentDetailComponent implements OnInit {

  public studentID?: number;
  public student?: Student;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.studentID = Number(this.activatedRoute.snapshot.params['id']);
    this.loadStudent();
  }

  loadStudent(): void {
    if (this.studentID) {
      this.studentService.getStudentByID(this.studentID).subscribe({
        next: (student) => {
          this.student = student; 
        }
      });
    }
  }
}
