import { Component, OnInit, ViewChild } from '@angular/core';
import { Iprod, ProductsStatus } from '../../models/product';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
@ViewChild('productForm') prodForm!:NgForm;
  constructor(
    private _prodService:ProductService,
    private _uuid:UuidService
  ) { }

  ngOnInit(): void {
  }

  onformSubmit(){
    if(this.prodForm.valid){
      let newObj=this.prodForm.value;
      newObj.pid=this._uuid.uuid()
      newObj.pstatus=ProductsStatus.Inprogress;
      this._prodService.createProd(newObj)
      this.prodForm.resetForm()
    }
  }
}
