import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {id:1, name: 'Minimalists Analog Watch', Price: '109', color: 'Black', available: 'Available', image: '/assets/image1.png'},
    {id:2, name: 'Hisense Ultra HD Smart TV', Price: '3339', color: 'Black', available: 'Available', image: '/assets/image2.jpeg'},
    {id:3, name: 'Apple Iphone 12', Price: '1855', color: 'Silver', available: 'Not Available', image: '/assets/image3.jpeg'},
  ];
}
