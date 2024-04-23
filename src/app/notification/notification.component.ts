import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: ` <div class="alert alert-success" [hidden]="displayNotification">
                <p>this website uses cookies!</p>
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>`,
  styles: [".close{float: right; margin-top: -55px;}"]
})
export class NotificationComponent {
  displayNotification: boolean = false;

  closeNotification(){
    this.displayNotification = true;
  }
}
