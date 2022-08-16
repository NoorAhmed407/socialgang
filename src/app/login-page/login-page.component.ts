import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  seePassword: boolean = false;
  loading:boolean = false;

  constructor(private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  validateEmail(email:string):boolean{
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  }

  toggleVisiblity():any{
    this.seePassword = !this.seePassword;
  }


  loginUser():any{
    const email:any = this.loginForm.value.email;
    const password:any = this.loginForm.value.password;

    if(!email || !password){
     return this.toastr.error('All Fields are required');
    }
    if(!this.validateEmail(email)){
     return this.toastr.error('Please Enter the correct Email');
    }
    this.loading = true;

    setTimeout(()=>{
      this.loading = false;
      this.toastr.success('User Loggedin Successfully');
      this.router.navigateByUrl('/home');

    },3000)

  }
}
