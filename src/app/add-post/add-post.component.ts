import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '150px',
    height: '150px',
  };
  constructor() { }

  ngOnInit(): void {
  }

  
  onImageChange(image:any){
    console.log('first', image);
  }


}
