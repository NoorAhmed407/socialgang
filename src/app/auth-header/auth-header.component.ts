import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css']
})
export class AuthHeaderComponent implements OnInit {

  title: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = this.router.url;
  }

}
