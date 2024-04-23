import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: ` <div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">
                <p>this website uses cookies!</p>
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>`,
  styles: [".close{float: right; margin-top: -55px;}",
           ".fadeOut {visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent {
  displayNotification: boolean = false;

  closeNotification(){
    this.displayNotification = true;
  }
}
