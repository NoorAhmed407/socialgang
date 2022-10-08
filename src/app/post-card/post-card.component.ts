import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() item:any;

  showMore: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log('itemeeee', this.item);
  }

 

  onToggleShowMore(){
    this.showMore = !this.showMore;
  }

}
