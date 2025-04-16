import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnakbarService {

  constructor(private _snakbar:MatSnackBar) { }

  notification(msg:string){
    const matcoonfig:MatSnackBarConfig={
      horizontalPosition:'right',
      verticalPosition:'top',
      duration:3000
    }
    this._snakbar.open(msg ,"close", matcoonfig)
  }
}
