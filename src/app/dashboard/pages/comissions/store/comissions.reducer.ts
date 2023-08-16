import { createFeature, createReducer, on } from '@ngrx/store';
import { ComissionsActions } from './comissions.actions';
import { Comission } from '../models';
import { COMISSIONS_MOCK } from '../mocks';


export const comissionsFeatureKey = 'comissions';

export interface State {
 comissions: Comission[],
 comissionDetail: Comission | null
}

export const initialState: State = {
  comissions: [],
  comissionDetail: null
};

export const reducer = createReducer(
  initialState,
  on(ComissionsActions.loadComissions, state => {
    return {
      ...state,
      comissions: COMISSIONS_MOCK
    }
  }),
  on(ComissionsActions.loadComissionDetail, (state, action) => {
    return {
      ...state,
      comissionDetail: COMISSIONS_MOCK.find((c) => c.id === action.comissionId) || null
    }
  })
);

export const comissionsFeature = createFeature({
  name: comissionsFeatureKey,
  reducer,
});

