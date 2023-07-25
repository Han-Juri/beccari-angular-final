import { NotifierService } from 'src/app/core/services/notifier.service';
import { Injectable } from '@angular/core';
import { CreateStudentData, Student, UpdateStudentData } from './models';
import { BehaviorSubject, Observable, Subject, delay, of, take } from 'rxjs';

const STUDENT_DB: Observable<Student[]> =  of([
    {id: 1, name: 'Juri', surname: 'Han', email: 'hanJuri@testmail', password: '1235'},
    {id: 2, name: 'Chun', surname: 'Li', email: 'chunli@testmail', password: '1235'},
    {id: 3, name: 'Cammy', surname: 'White', email: 'cammywhite@testmail', password: '1235'}
]).pipe(delay(1000))

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] =  [
    
  ];

  private sendNotification$ = new Subject<string>()

  private _students$ = new BehaviorSubject<Student[]>([])
  private students$ = this._students$.asObservable()
 
  constructor(private notifier: NotifierService ) { 
    this.sendNotification$.subscribe({
      next: (message => alert(message))
    })
  }

  sendNotification(notification: string): void {
    this.sendNotification$.next(notification)
  }

  loadStudents(): void {
    STUDENT_DB.subscribe({
      next: (studentsFromDB) => this._students$.next(studentsFromDB)
    })
  }

  getUsers(): Observable<Student[]> {
    return this.students$
  }

  createStudent(student: CreateStudentData): void {
    this.students$.pipe(take(1)).subscribe({
      next: (currentArray) => {
        this._students$.next([...currentArray, {...student, id: currentArray.length + 1}]);
        this.notifier.showSuccess('Usuario creado')
      }
    })
  }

  updateStudentByID(id: Number, updatedStudent: UpdateStudentData): void {

    this.students$.pipe(take(1)).subscribe({
      next: (currentArray) => {
        this._students$.next(
          currentArray.map((s) => s.id === id ? { ...s, ...updatedStudent  } : s)
        )
      }
    })
  }

  deleteStudentByID (id: number): void {
    this._students$.pipe(take(1)).subscribe({
      next: (currentArray) =>{ this._students$.next(currentArray.filter((s) => s.id != id));
      this.notifier.showSuccess('Usuario eliminado')}
    })
  }
    
}
