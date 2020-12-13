import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public routernow: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  isRegister() {
    // return true if the current page is home
    return this.router.url.match('^/home$');
  }
  isAdd() {
    // return true if the current page is home
    return this.router.url.match('^/add*');
  }

  isShw() {
    // return true if the current page is login
    return this.router.url.match('^/shw');
  }
  isUpdate() {
    // return true if the current page is login
    return this.router.url.match('^/update');
  }

}
