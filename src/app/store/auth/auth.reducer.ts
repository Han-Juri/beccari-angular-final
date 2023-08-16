import { createReducer, on } from "@ngrx/store"
import { User } from "src/app/dashboard/pages/users/models"
import { AuthActions } from "./auth.actions"


export const authFeaturedKey = 'auth'
export interface AuthState {
    authUser: User | null
}

const initialState : AuthState = {
    authUser: null
}

export const authReducer = createReducer(initialState, 
    on(AuthActions.setAuthUser, (currentState, action) => {
        return {
            authUser: action.payLoad
        }
    }))