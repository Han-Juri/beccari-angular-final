import { NotifierService } from 'src/app/core/services/notifier.service';
import { Injectable } from '@angular/core';
import { CreateCourseData, Course, UpdateCourseData } from './models';
import { BehaviorSubject, Observable, Subject, delay, of, take } from 'rxjs';

const COURSE_DB: Observable<Course[]> =  of([
  {id: 1, name: 'Mate', surname: 'Matica', email: 'matematica@testmail', password: '1235'},
  {id: 2, name: 'Len', surname: 'Gua', email: 'lengua@testmail', password: '1235'},
  {id: 3, name: 'His', surname: 'Toria', email: 'historia@testmail', password: '1235'}
]).pipe(delay(1000))

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private course: Course[] =  [
    
  ];

  private sendNotification$ = new Subject<string>()

  private _courses$ = new BehaviorSubject<Course[]>([])
  private courses$ = this._courses$.asObservable()
 
  constructor(private notifier: NotifierService ) { 
    this.sendNotification$.subscribe({
      next: (message => alert(message))
    })
  }

  sendNotification(notification: string): void {
    this.sendNotification$.next(notification)
  }

  loadCourses(): void {
    COURSE_DB.subscribe({
      next: (coursesFromDB) => this._courses$.next(coursesFromDB)
    })
  }

  getCourses(): Observable<Course[]> {
    return this.courses$
  }

  createCourse(course: CreateCourseData): void {
    this.courses$.pipe(take(1)).subscribe({
      next: (currentArray) => {
        this._courses$.next([...currentArray, {...course, id: currentArray.length + 1}]);
        this.notifier.showSuccess('Usuario creado')
      }
    })
  }

  updateCourseByID(id: Number, updatedCourse: UpdateCourseData): void {

    this.courses$.pipe(take(1)).subscribe({
      next: (currentArray) => {
        this._courses$.next(
          currentArray.map((s) => s.id === id ? { ...s, ...updatedCourse  } : s)
        )
      }
    })
  }

  deleteCourseByID (id: number): void {
    this._courses$.pipe(take(1)).subscribe({
      next: (currentArray) =>{ this._courses$.next(currentArray.filter((s) => s.id != id));
      this.notifier.showSuccess('Usuario eliminado')}
    })
  }
}
