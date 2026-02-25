import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {

  email="avinash@gmail.com";
  phone=" 9666193143 ";

  showEmail=false;

  toggleEmail(){
    this.showEmail=!this.showEmail;
  }
}
