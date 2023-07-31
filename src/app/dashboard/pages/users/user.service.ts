import { NotifierService } from 'src/app/core/services/notifier.service';
import { Injectable } from '@angular/core';
import { CreateUserData, User, UpdateUserData } from './models';
import { BehaviorSubject, Observable, Subject, delay, of, take } from 'rxjs';

const USER_DB: Observable<User[]> =  of([
    {id: 1, name: 'Juri', surname: 'Han', email: 'hanJuri@testmail', password: '1235'},
    {id: 2, name: 'Chun', surname: 'Li', email: 'chunli@testmail', password: '1235'},
    {id: 3, name: 'Cammy', surname: 'White', email: 'cammywhite@testmail', password: '1235'}
]).pipe(delay(1000))

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User[] =  [
    
  ];

  private sendNotification$ = new Subject<string>()

  private _users$ = new BehaviorSubject<User[]>([])
  private users$ = this._users$.asObservable()
 
  constructor(private notifier: NotifierService ) { 
    this.sendNotification$.subscribe({
      next: (message => alert(message))
    })
  }

  sendNotification(notification: string): void {
    this.sendNotification$.next(notification)
  }

  loadUsers(): void {
    USER_DB.subscribe({
      next: (usersFromDB) => this._users$.next(usersFromDB)
    })
  }

  getUsers(): Observable<User[]> {
    return this.users$
  }

  createUser(user: CreateUserData): void {
    this.users$.pipe(take(1)).subscribe({
      next: (currentArray) => {
        this._users$.next([...currentArray, {...user, id: currentArray.length + 1}]);
        this.notifier.showSuccess('Usuario creado')
      }
    })
  }

  updateUserByID(id: Number, updatedUser: UpdateUserData): void {
    this.users$.pipe(take(1)).subscribe({
      next: (currentArray) => {
        this._users$.next(
          currentArray.map((s) => s.id === id ? { ...s, ...updatedUser  } : s)
        )
      }
    })
  }

  deleteUserByID (id: number): void {
    this._users$.pipe(take(1)).subscribe({
      next: (currentArray) =>{ this._users$.next(currentArray.filter((s) => s.id != id));
      this.notifier.showSuccess('Usuario eliminado')}
    })
  }
    
}
