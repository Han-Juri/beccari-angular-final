import { NotifierService } from 'src/app/core/services/notifier.service';
import { Injectable } from '@angular/core';
import { CreateCourseData, Course, UpdateCourseData } from './models';
import { BehaviorSubject, Observable, Subject, mergeMap, map, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private course: Course[] =  [
    
  ];

  private sendNotification$ = new Subject<string>()

  private _courses$ = new BehaviorSubject<Course[]>([])
  private courses$ = this._courses$.asObservable()
 
  constructor(private notifier: NotifierService, private httpClient: HttpClient) { 
    this.sendNotification$.subscribe({
      next: (message => alert(message))
    })
  }

  sendNotification(notification: string): void {
    this.sendNotification$.next(notification)
  }

  loadCourses(): void {
    
    this.httpClient.get<Course[]> (enviroment.baseApiUrl +'/courses').subscribe({
      next: (resp) => {
        this._courses$.next(resp)
      },
      error: () => {
        this.notifier.showError('No se pudieron cargar los cursos')
      },
    })
  }

  getCourses(): Observable<Course[]> {
    return this.courses$
  }

  getCourseByID(id: number): Observable<Course | undefined> {
    return this.courses$.pipe(
      map((courses) => courses.find((c) => c.id === id)), take(1))
  }

  createCourse(payLoad: CreateCourseData): void {
    
    this.httpClient.post<Course>(enviroment.baseApiUrl +'/courses', payLoad)
    .pipe(
      mergeMap((courseCreate) => this.courses$.pipe(take(1), map((currentArray) => [...currentArray, courseCreate])))
    )
    .subscribe({
      next: (updatedArray) => {
        this._courses$.next(updatedArray)
      }
    })
  }

  updateCourseByID(id: Number, updatedCourse: UpdateCourseData): void {

    this.httpClient.put(enviroment.baseApiUrl +'/courses/' + id, updatedCourse).subscribe({
      next: () => this.loadCourses()
    })
  }

  deleteCourseByID (id: number): void {
    this.httpClient.delete(enviroment.baseApiUrl +'/courses/' + id)
    .pipe(
      mergeMap(() => this.courses$.pipe(take(1), map((currentArray) => currentArray.filter((u) => u.id !== id )))))
      .subscribe({
        next: (updatedArray) => this._courses$.next(updatedArray)
      })

  }
}


