import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Hello From Bridgelabz';
  image = '../assets/BL_logo_square_jpg.jpg';
  url = "https://www.bridgelabz.com/";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
  }


  handleClick($event: any) {
    console.log('Clicked on bridgelabz logo');
    alert('Redirecting to bridgelabz website !!');
    window.open(this.url);
  }

  onInput($event: any) {
    console.log("Change Event Occured!!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!!";

  }

}







