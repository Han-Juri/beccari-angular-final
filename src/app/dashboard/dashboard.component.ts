import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { User } from './pages/users/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFiller = false;

  public authUser$: Observable<User | null>

  constructor(private router:Router, private authService: AuthService) {
    this.authUser$ = this.authService.authUser$
  }

  logout(): void {
    this.router.navigate(['auth', 'login'], {})
    localStorage.removeItem('token')
  }  



}
