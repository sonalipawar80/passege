import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iprod } from '../../models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
productArr!:Array<Iprod>;
  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this.productArr=this._productService.fetchAllProd()
  }

}
