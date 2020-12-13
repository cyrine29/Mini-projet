import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produc;
  category: any;
  currentItem = 'moetaz';

  constructor(private productService: ProductService) { }

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
  Search(){
    if (this.category === '') {
      this.ngOnInit();
    }else {
      this.produc = this.produc.filter(res => {
        return res.category.toLowerCase().match(this.category.toLowerCase());
      });
    }
  }




}
