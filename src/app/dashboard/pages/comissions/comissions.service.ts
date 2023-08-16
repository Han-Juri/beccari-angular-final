import { NotifierService } from 'src/app/core/services/notifier.service';
import { Injectable } from '@angular/core';
import { CreateComissionData, Comission, UpdateComissionData } from './models';
import { BehaviorSubject, Observable, Subject, map, mergeMap, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
    providedIn: 'root'
  })
  export class ComissionsService {
  
    private comission: Comission[] =  [
      
    ];
  
    private sendNotification$ = new Subject<string>()
  
    private _comissions$ = new BehaviorSubject<Comission[]>([])
    private comissions$ = this._comissions$.asObservable()
    private _isLoading$ = new BehaviorSubject(false)
    public isLoading$ = this._isLoading$.asObservable()
   
    constructor(private notifier: NotifierService, private httpClient: HttpClient) { 
      this.sendNotification$.subscribe({
        next: (message => alert(message))
      })
    }
  
    sendNotification(notification: string): void {
      this.sendNotification$.next(notification)
    }
  
    loadComissions(): void {
      
      this._isLoading$.next(true)
      this.httpClient.get<Comission[]> (enviroment.baseApiUrl +'/comissions').subscribe({
        next: (resp) => {
          this._comissions$.next(resp)
        },
        error: () => {
          this.notifier.showError('No se pudieron cargar los usuarios')
        },
        complete: () => {
          this._isLoading$.next(false)
        }
      })
    }
  
    getComissions(): Observable<Comission[]> {
      return this.comissions$
    }
  
      getComissionByID(id: number): Observable<Comission | undefined> {
      return this.comissions$.pipe(
        map((comissions) => comissions.find((c) => c.id === id)), take(1))
    }
  
    createComission(payLoad: CreateComissionData): void {
  
      this.httpClient.post<Comission>(enviroment.baseApiUrl +'/comissions', payLoad)
      .pipe(
        mergeMap((comissionCreate) => this.comissions$.pipe(take(1), map((currentArray) => [...currentArray, comissionCreate])))
      )
      .subscribe({
        next: (updatedArray) => {
          this._comissions$.next(updatedArray)
        }
      })
    }
  
    updateComissionByID(id: Number, updatedComission: UpdateComissionData): void {
     
      this.httpClient.put(enviroment.baseApiUrl +'/comissions/' + id, updatedComission).subscribe({
        next: () => this.loadComissions()
      })
    }
  
    deleteComissionByID (id: number): void {
      
      this.httpClient.delete(enviroment.baseApiUrl +'/comissions/' + id)
      .pipe(
        mergeMap(() => this.comissions$.pipe(take(1), map((currentArray) => currentArray.filter((u) => u.id !== id )))))
        .subscribe({
          next: (updatedArray) => this._comissions$.next(updatedArray)
        })
    }
      
  }
  