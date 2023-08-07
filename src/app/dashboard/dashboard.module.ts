import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from './pages/users/users.module';
import { StudentsModule } from './pages/students/students.module';
import { CoursesModule } from './pages/courses/courses.module';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    SharedModule,
    HomeModule,
    UsersModule,
    StudentsModule,
    CoursesModule
  ],
  exports : [
    DashboardComponent
  ]
})
export class DashboardModule { 

  constructor(private router:Router) {}

  logout(): void {
    this.router.navigate(['auth', 'login'])
  }
}
