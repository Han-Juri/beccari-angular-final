import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeModule } from './Components/home/home.module';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from './Components/users/users.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    SharedModule,
    HomeModule,
    UsersModule
  ],
  exports : [
    DashboardComponent
  ]
})
export class DashboardModule { }
