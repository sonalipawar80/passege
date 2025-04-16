import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const moduledata=[
  MatButtonModule,
  MatSnackBarModule,
  MatDividerModule,
  MatIconModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...moduledata
  ],
  exports:[
    ...moduledata
  ]
})
export class MaterialModule { }
