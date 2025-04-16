import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from '../../models/passenger';
import { PassengersService } from '../../services/passengers.service';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {
@Input() passObj!:Ipassenger;
@Output() emitcheckInRemo:EventEmitter<boolean>=new EventEmitter
isEditMode:boolean=false;
  constructor(private _passengerServ:PassengersService) { }

  ngOnInit(): void {
  }

OnclickUpdatePass(fullNameControl:HTMLInputElement){
// api call : is in edit mode ==true
if(this.isEditMode){
  let updatedPassObj:Ipassenger={...this.passObj, fullname:fullNameControl.value}
  this._passengerServ.updatePassName(updatedPassObj)
}

    this.isEditMode=!this.isEditMode;
}

onRemovePass(){
  let removedobj=this.passObj;
  this._passengerServ.removepass(removedobj)
  this.emitcheckInRemo.emit(true)
  console.log(removedobj)
}

}
