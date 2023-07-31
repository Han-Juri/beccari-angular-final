import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styles: [
  ]
})
export class StudentDetailComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.snapshot.params['id']
  }
}
