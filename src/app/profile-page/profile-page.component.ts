import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagePickerConf } from 'ngp-image-picker';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '150px',
    height: '150px',
  };
  data:any = null;
  user:any;

  constructor(private toastr: ToastrService, private router: Router, private authService:AuthService) {

    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
   }

  ngOnInit(): void {
      
      this.authService.getUserDetail({'Authorization': 'Bearer '+this?.user?.token}).subscribe(data=>{
        console.log("dataaaaaaa", data.data);
        this.data = data?.data;
      }, err=>{
      return this.toastr.error(err?.error?.message);
      });
  }

  onImageChange(image:any){
    console.log('first', image);
  }

  clickAddPost(){
    this.router.navigateByUrl('/addPost');
  }

}
