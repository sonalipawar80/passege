import { Component, OnInit } from '@angular/core';
import { PassengersService } from '../../services/passengers.service';
import { Ipassenger } from '../../models/passenger';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
passangerData:Array<Ipassenger>=[]
checkInCount!:number;


constructor(
  private _passengerService:PassengersService
){}
ngOnInit(): void {
  this.passangerData=this._passengerService.fetchallpassengers()
  this.getAllCheckedCount()
}

getAllCheckedCount(){
  this.checkInCount=this.passangerData.filter(p=>p.checkInDate).length
}

}
