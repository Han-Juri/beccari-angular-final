import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../courses.service';
import { Course } from '../../models';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styles: [],
})
export class CourseDetailComponent implements OnInit {
  public courseID?: number;
  public course?: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CoursesService
  ) {}

  ngOnInit(): void {
    this.courseID = Number(this.activatedRoute.snapshot.params['id']);
    this.loadCourse();
  }

  loadCourse(): void {
    if (this.courseID) {
      this.courseService.getCourseByID(this.courseID).subscribe({
        next: (course) => {
          this.course = course;
        }
      });
    }
  }
}
