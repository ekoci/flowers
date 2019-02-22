import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  date: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'X', weight: 1.0079, date: 'H', status: '1'},
  {position: 2, name: 'X', weight: 4.0026, date: 'He', status: '1'},
  {position: 3, name: 'x', weight: 6.941, date: 'Li', status: '1'},
  {position: 4, name: 'x', weight: 9.0122, date: 'Be', status: '1'},
  {position: 5, name: 'x', weight: 10.811, date: 'B', status: '1'},
  {position: 6, name: 'x', weight: 12.0107, date: 'C', status: '1'},
  {position: 7, name: 'x', weight: 14.0067, date: 'N', status: '1'},
  {position: 8, name: 'x', weight: 15.9994, date: 'O', status: '1'},
  {position: 9, name: 'x', weight: 18.9984, date: 'F', status: '1'},
  {position: 10, name: 'X', weight: 20.1797, date: 'Ne', status: '1'},
];
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'date', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  constructor() {
  }

}
