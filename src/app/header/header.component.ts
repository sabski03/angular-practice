import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  slogan: string = "Your one stop shop for everything.";
  source: string = "/assets/image2.jpeg";
}
