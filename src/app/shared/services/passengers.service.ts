import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger';
import { SnakbarService } from './snakbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {
  passengersArr:Array<Ipassenger>= [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
      
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    }

  ]

  constructor(private _snakbar:SnakbarService) { }


  fetchallPassengers():Array<Ipassenger>{
    return this.passengersArr
  }

  updatePassName(updetPassObj:Ipassenger){
    let getIndex=this.passengersArr.findIndex(p=>p.id===updetPassObj.id)
    this.passengersArr[getIndex]=updetPassObj;
    this._snakbar.notification(`the name of passenger is Updated to ${updetPassObj.fullname}`)

  }

  removepass(passObj:Ipassenger){
    let getIndex=this.passengersArr.findIndex(p=>p.id===passObj.id)
    this.passengersArr.splice(getIndex,1)
    this._snakbar.notification(` ${passObj.fullname} passenger removed successfully`)

  }
}
