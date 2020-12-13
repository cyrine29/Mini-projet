import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../shared/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders;

  constructor(private productService: ProductService , private  route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getallorder()
      .subscribe(
        (data) => {
          this.orders = data;
          console.log(this.orders);
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      )
    ;
  }
}
