import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  showMore: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

 

  onToggleShowMore(){
    this.showMore = !this.showMore;
  }

}
