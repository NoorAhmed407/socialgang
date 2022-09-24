import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  seePassword: boolean = false;
  loading:boolean = false;

  constructor(private toastr: ToastrService, private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  validateEmail(email:string):boolean{
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  }


  registerUser():any {
    console.log('Form Control', this.registerForm.value);
    const {name,email,password} = this.registerForm.value;
    if(!name || !email || !password) {
      return this.toastr.error('Please Enter all the fields');
    }

    if(!this.validateEmail(email)){
      return this.toastr.error('Please Enter the valid email address');
    }

    this.loading = true;
    this.authService.userRegister({name,email,password})
      .subscribe(data => {
        this.loading=false;
        console.log('Service Data', data);
        this.toastr.success(data?.message);
        return this.router.navigateByUrl('/login');


      }, data=>{
        this.loading = false;
        return this.toastr.error(data?.error?.message);
      });

  }

}
