import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user.model';
import { UserService } from '../../shared/user.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' , './login.component2.css']
})
export class LoginComponent implements OnInit {
  users: User[];
  form: FormGroup;
  errorMsg: string;

  constructor(private router: Router, private fb: FormBuilder, public userService: UserService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  validLogin(f) {
    this.userService.getalluser().subscribe(
      resp => {
        this.users = resp;
        const logeed = f.value;
        for (const user of this.users) {
          if (user.email === logeed.email && user.password === logeed.password && user.role === 'admin') {
            this.router.navigate(['admin']);
          } else if (user.email === logeed.email && user.password === logeed.password) {
            this.router.navigate(['home']);
          }else{
            this.errorMsg = 'your informations i wrong !!';
          }
        }
      }
    );
  }
}

