import { Component, OnInit } from '@angular/core';
import { PassengersService } from '../../services/passengers.service';
import { Ipassenger } from '../../models/passenger';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
passengerData:Array<Ipassenger>=[]
checkIncount!:number;
  constructor(
    private _passengerService:PassengersService
  ) { }

  ngOnInit(): void {
    this.passengerData=this._passengerService.fetchallPassengers()
    this.getCheckInCount()   
    // prder imp 
  }

  getCheckInCount(){
    this.checkIncount=this.passengerData.filter(pass=>pass.checkInDate).length
  }

}
