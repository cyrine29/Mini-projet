import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../shared/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  errorMsg: string;
  currentItem = 'Television';
  public imageSrc: string;
  constructor(private fb: FormBuilder, public productService: ProductService,
              private router: Router) {
    this.form = this.fb.group({
      reference: ['', Validators.required],
      quantity: ['', Validators.required],
      expireddate: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
      fileSource: ['', Validators.required],
    });
  }
  onFileChange(event) {

    const reader = new FileReader();


    if (event.target.files && event.target.files.length) {

      const [image] = event.target.files;

      reader.readAsDataURL(image);


      reader.onload = () => {


        this.imageSrc = reader.result as string;


        this.form.patchValue({

          fileSource: reader.result

        });


      };
    }


  }
  ngOnInit(): void {
  }

}
