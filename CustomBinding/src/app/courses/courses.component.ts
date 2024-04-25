import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    {id:101,name:'Javascript for beginners',author: 'john heikela', duration: 48, type: 'Free',
     price:0.00, rating: 3.5, image:'assets/image2.jpeg',
     description: 'in this course you will learn javascript'
    },
    {id:102,name:'php',author:'mark vought',duration:28,type:'Premium',
     price:129.00,rating:4.5,image:'assets/image1.png',
     description:'in this course you will learn php',
    },
    {id:103,name:'bootstrap',author:'steve smith',duration: 28, type: 'Premium',
     price:145.50,rating:4.8,image:'assets/image3.jpeg',
     description: 'in this course you will learn bootstrap',
    },
     
  ]

  getTotalCourses(){
    return this.courses.length;
  }
  getTotalFreeCourses(){
    return this.courses.filter(course => course.type === 'Free').length;
  }
  getTotalPremiumCourses(){
    return this.courses.filter(course => course.type === 'Premium').length;
  }

  courseCountRadioButton: string = 'All';
  searchText: string = '';

  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton = data;
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  }
}
