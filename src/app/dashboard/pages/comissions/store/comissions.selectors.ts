import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromComissions from './comissions.reducer';

export const selectComissionsState = createFeatureSelector<fromComissions.State>(
  fromComissions.comissionsFeatureKey
);

export const selectComissionsArray = createSelector(selectComissionsState, (state) => state.comissions )
