import { Injectable } from '@angular/core';
import { Iprod, ProductsStatus } from '../models/product';
import { getTestBed } from '@angular/core/testing';
import { SnakbarService } from './snakbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productArr:Array<Iprod>=[
    {
      pname: "Samsung 31",
      pdetails: "If productArr is bound to a UI (like in Angular with *ngFor), but you're using productArr in multiple places or passing it via input/output, changes may not reflect due to:",
      pid: "123",
      pstatus: ProductsStatus.Inprogress
    },
    {
      pname: "iPhone 14",
      pdetails: "If productArr is bound to a UI (like in Angular with *ngFor), but you're using productArr in multiple places or passing it via input/output, changes may not reflect due to:",
      pid: "124",
      pstatus: ProductsStatus.Delivered
    },
    {
      pname: "Redmi Note 12",
      pdetails: "If productArr is bound to a UI (like in Angular with *ngFor), but you're using productArr in multiple places or passing it via input/output, changes may not reflect due to:",
      pid: "125",
      pstatus: ProductsStatus.Dispatched
    },
    {
      pname: "OnePlus Nord CE",
      pdetails: "Smooth experience with OxygenOS.",
      pid: "126",
      pstatus: ProductsStatus.Inprogress
    },
    {
      pname: "Realme GT",
      pdetails: "High speed and gaming performance.",
      pid: "127",
      pstatus: ProductsStatus.Delivered
    }
  ]
  constructor(private _snakbar:SnakbarService) { }


  fetchAllProd(){
    return this.productArr;
  }

  updateProd(prodsts:ProductsStatus,ProdId:string){
    let getIndex=this.productArr.findIndex(p=>p.pid===ProdId)
    this.productArr[getIndex].pstatus=prodsts
    
this._snakbar.notification(` product Updated successfully  ${prodsts}`)
  }
  createProd(newObject:Iprod){
    this.productArr.push(newObject)
this._snakbar.notification(`the new product addedd successfully  ${newObject.pname}`)
  }
}
