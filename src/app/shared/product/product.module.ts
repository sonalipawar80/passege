import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations:[
        ProductDashboardComponent,
        ProductCardComponent,
        ProductFormComponent
    ],
    imports:[
        CommonModule,
        MaterialModule,
        FormsModule
    ],
    exports:[
        ProductDashboardComponent
    ]
})
export class ProductModule{

}