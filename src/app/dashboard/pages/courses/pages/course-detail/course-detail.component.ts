import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styles: [
  ]
})
export class CourseDetailComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.snapshot.params['id']
  }
}
