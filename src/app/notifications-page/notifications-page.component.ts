import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent implements OnInit {
  notificationData: any[] =[
    {
      id: 1,
      title: 'Like',
      description: 'Janny Liked your post',
      read: false,
    },
    {
      id: 2,
      title: 'Comment',
      description: 'Haryy Commented on your post',
      read: false,

    },
    {
      id: 3,
      title: 'Comment',
      description: 'Michal Commented on your post',
      read: true,

    },
    {
      id: 4,
      title: 'Like',
      description: 'Lorem Ispum summti Liked your post',
      read: true,
    },
    {
      id: 5,
      title: 'Like',
      description: 'Janny Liked your post',
      read: true,
    },
    {
      id: 6,
      title: 'Comment',
      description: 'Haryy Commented on your post',
    },
    {
      id: 7,
      title: 'Comment',
      description: 'Michal Commented on your post',
      read: true,
    },
    {
      id: 8,
      title: 'Like',
      description: 'Lorem Ispum summti Liked your post',
      read: false,
    }
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

  readNotification(data:any){
    let itemIndex = this.notificationData.indexOf(data);
    this.notificationData[itemIndex].read = true;
  }

}
