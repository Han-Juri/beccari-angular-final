import { ActionReducerMap } from "@ngrx/store";
import { AuthState, authFeaturedKey, authReducer } from "./auth/auth.reducer";

export interface AppState {
    [authFeaturedKey]: AuthState
}

export const appReducer: ActionReducerMap<AppState> = {
    [authFeaturedKey]: authReducer
}