import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.css']
})
export class NotificationCardComponent implements OnInit {

  @Input() notification:any;
  @Output() onClickRead = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickRead(){
    this.onClickRead.emit(this.notification);
  }

}
