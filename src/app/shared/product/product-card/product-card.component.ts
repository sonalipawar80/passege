import { Component, Input, OnInit } from '@angular/core';
import { Iprod, ProductsStatus } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
@Input() Prod!:Iprod;
isproductSts=ProductsStatus
  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
  }
  OnstsUpd(updatedStatus:ProductsStatus){
      this._productService.updateProd(updatedStatus,this.Prod.pid)
  
  }

}
