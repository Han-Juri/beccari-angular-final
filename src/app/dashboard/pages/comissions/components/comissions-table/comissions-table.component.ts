import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Comission } from '../../models';
import { Store } from '@ngrx/store';
import { ComissionsActions } from '../../store/comissions.actions';
import { selectComissionsArray } from '../../store/comissions.selectors';

@Component({
  selector: 'app-comissions-table',
  templateUrl: './comissions-table.component.html',
  styleUrls: ['./comissions-table.component.scss']
})
export class ComissionsTableComponent implements OnInit {

  comissions$: Observable<Comission[]>;

  displayedColumns: string[] = ['id', 'fullName', 'email', 'actions'];

  constructor(private store: Store) {
    this.comissions$ = this.store.select(selectComissionsArray)
  }

  ngOnInit(): void {
    this.store.dispatch(ComissionsActions.loadComissions())
  }

  @Input()
  dataSource: Comission[] = []

  @Output()
  deleteComission = new EventEmitter<Comission>()
  @Output()
  editComission = new EventEmitter<Comission>()
}
