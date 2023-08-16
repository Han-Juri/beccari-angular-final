import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ComissionsActions = createActionGroup({
  source: 'Comissions',
  events: {
    'Load Comissions': emptyProps(),
    'Load Comission Detail': props<{ comissionId: number }>()
    
  }
});
