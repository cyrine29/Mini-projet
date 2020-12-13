import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../shared/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../shared/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id;
  user;
  form: FormGroup;
  public imageSrc: string;
  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
    this.form = this.fb.group({
      reference: ['', Validators.required],
      category: ['', Validators.required],
      expireddate: ['', Validators.required],
      quantity: ['', Validators.required],
      image: ['', Validators.required],
      fileSource: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getUserbyid(this.id).subscribe((result) => {
      this.user = result;
      this.form.patchValue(this.user);
    });
  }
  submit() {
    this.productService
      .updateUser(this.form.value, this.id)
      .subscribe(() => {
        this.router.navigate(['/home']);
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

}
