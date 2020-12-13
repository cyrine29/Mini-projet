import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../shared/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id;
  product;
  form: FormGroup;
  errorMsg: string;
  currentDate = new Date();

  cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
  constructor(private fb: FormBuilder, public productService: ProductService, private router: ActivatedRoute) {

    this.form = this.fb.group({
      reference: ['', Validators.required],
      category: ['', Validators.required],
      quantity: ['', Validators.required],
      name: ['', Validators.required],
      date: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    console.log(this.id);
    this.productService.getUserbyid(this.id).subscribe((result) => {
      this.product = result;
    });  }

}
