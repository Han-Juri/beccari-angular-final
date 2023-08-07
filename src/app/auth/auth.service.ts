import { NotifierService } from './../core/services/notifier.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { Injectable } from "@angular/core";
import { LoginData } from "./models";
import { User } from '../dashboard/pages/users/models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private _authUser$ = new BehaviorSubject<User | null>(null)
    public authUser$ = this._authUser$.asObservable()

    constructor(private router: Router, private notifier: NotifierService, private httpClient: HttpClient) {}

    isAuntenticated(): Observable<boolean> {
       
        return this.httpClient.get<User[]>(enviroment.baseApiUrl +'/users', {
            params: {
                token: localStorage.getItem('token') || ''
            }
        }).pipe(map((result) => {
            return !!result.length
        }))
    }

    login(payLoad: LoginData): void {

        this.httpClient.get<User[]>(enviroment.baseApiUrl +'/users', {
            params:{
                email: payLoad.email || '',
                password: payLoad.password || ''
            }
        }).subscribe({
            next: (response) => {
                const authUser = response[0]
                if (response.length) {
                    this._authUser$.next(response[0])
                    this.router.navigate(['/dashboard'])
                    localStorage.setItem('token', authUser.token)
                } else {
                    this.notifier.showError('Email o contraseña incorrectos')
                    this._authUser$.next(null)
                }
            },
            error : (err => {
                if (err instanceof HttpErrorResponse) {
                   this.notifier.showError('Ocurrio un error inesperado')
                }
            })
        })
    }
}