import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ItemDialogComponent} from './item-dialog/item-dialog.component';
export interface PeriodicElement {
  no: number;
  name: string;
  info: string;
  price: number;
  discount: number;
  createdate: string;
  img: string;
  status: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, name: 'X', info: '1.0079', price: 1, discount: 1, createdate: '19.10.2018', img: 'assets/photo/flower1.jpg', status: false},
  {no: 2, name: 'X', info: '1.0079', price: 1, discount: 1, createdate: '19.10.2018', img: 'assets/photo/flower2.jpg', status: false},
  {no: 3, name: 'X', info: '1.0079', price: 1, discount: 1, createdate: '19.10.2018', img: 'assets/photo/flower3.jpg', status: true},
]

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})

export class AllDataComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }
  alldata = []

  ngOnInit() {
    this.alldata = ELEMENT_DATA;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ItemDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  addToMobile(value: number) {
    for ( let i = 0; i < this.alldata.length; i++) {
      if (this.alldata[i].no === value) {
        this.alldata[i].status = !this.alldata[i].status;
      }
    }
  }

  deletebucket(value: number) {
    this.alldata.splice(value, value);
    console.log( this.alldata);
  }
}
