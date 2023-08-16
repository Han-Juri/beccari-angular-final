import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComissionsComponent } from './comissions.component';
import { ComissionsTableComponent } from './components/comissions-table/comissions-table.component';
import { ComissionsDetailComponent } from './pages/comissions-detail/comissions-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComissionsDialogFormModule } from './components/comissions-dialog-form/comissions-dialog-form.module';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ComissionsEffects } from './store/comissions.effects';
import { StoreModule } from '@ngrx/store';
import { comissionsFeature } from './store/comissions.reducer';



@NgModule({
  declarations: [
    ComissionsComponent,
    ComissionsTableComponent,
    ComissionsDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComissionsDialogFormModule,
    RouterModule,
    StoreModule.forFeature(comissionsFeature),
    EffectsModule.forFeature([ComissionsEffects])
  ],
  exports: [
    ComissionsComponent
  ]
})
export class ComissionsModule { }
