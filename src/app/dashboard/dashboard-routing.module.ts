import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { UsersComponent } from "./pages/users/users.component";
import { UserDetailComponent } from "./pages/users/pages/user-detail/user-detail.component";
import { StudentsComponent } from "./pages/students/students.component";
import { StudentDetailComponent } from "./pages/students/pages/student-detail/student-detail.component";
import { CoursesComponent } from "./pages/courses/courses.component";
import { CourseDetailComponent } from "./pages/courses/pages/course-detail/course-detail.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'home',
                component: HomeComponent
              },
              {
                path: 'users',
                component: UsersComponent
              },
              {
                path: 'users/:id',
                component: UserDetailComponent
              },
              {
                path: 'students',
                component: StudentsComponent
              },
              {
                path: 'students/:id',
                component: StudentDetailComponent
              },
              {
                path: 'courses',
                component: CoursesComponent
              },
              {
                path: 'courses/:id',
                component: CourseDetailComponent
              },
              {
                path: '**',
                component: HomeComponent
              }
        ])
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}