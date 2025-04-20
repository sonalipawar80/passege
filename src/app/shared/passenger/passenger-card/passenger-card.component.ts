import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from '../../models/passenger';
import { PassengersService } from '../../services/passengers.service';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {
  @Input() pass!:Ipassenger;
  @Output() emitcheckInRemo:EventEmitter<boolean>=new EventEmitter
 isModeEdited!:boolean;
  constructor(
    private _passService:PassengersService
  ){

  }
ngOnInit(): void {
  
}

onclickUpdate(fullName:HTMLInputElement){
  if(this.isModeEdited){
    let upadatedPassObj:Ipassenger={...this.pass, fullname:fullName.value};
    this._passService.updatePass(upadatedPassObj)
  }
  this.isModeEdited=!this.isModeEdited
}

removePass(){
  let removedObj=this.pass;
  console.log(removedObj)
  let confirmResult=confirm('Are you sure Remove Product')
  if(confirmResult){
    this._passService.removePass(removedObj)
    this.emitcheckInRemo.emit(true)
  }
  

}
}
