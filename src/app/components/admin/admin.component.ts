import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  produc;

  constructor(private productService: ProductService , private  route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getalluser()
      .subscribe(
        (data) => {
          this.produc = data;
          console.log(this.produc);
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      )
    ;
  }

}
