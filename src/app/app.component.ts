import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SecondApp';
  employeeFirstName:string='Divya';
  employeeLastName:string='Garg';
  num1=10;
  num2=20;
  isDisabled=false;
  imageUrl="https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png";
  userName='Divya Garg';

  changeMyTitle(){
    this.title="Data Binding Demo";    
  }
  changeUserName(uname:string){
    this.userName=uname;
  }
}
