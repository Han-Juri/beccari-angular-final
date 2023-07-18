import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'actions'];

  @Input()
  dataSource: Student[] = []

  @Output()
  deleteStudent = new EventEmitter<Student>()
  @Output()
  editStudent = new EventEmitter<Student>()
}
