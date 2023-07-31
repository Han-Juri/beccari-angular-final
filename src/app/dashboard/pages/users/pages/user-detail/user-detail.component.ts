import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [
  ]
})
export class UserDetailComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.snapshot.params['id']
  }

}
