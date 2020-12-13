import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css' , './register.component2.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errorMsg: string;
  constructor(private fb: FormBuilder, public userService: UserService,
              private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
