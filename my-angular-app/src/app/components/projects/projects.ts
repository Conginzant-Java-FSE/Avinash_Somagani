import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {

  projects = [
    {
      name:'Hiring Platform',
      details:'Microservices based hiring system',
      show:false
    },
    {
      name:'AI Chatbot',
      details:'Diabetic patient assistant',
      show:false
    }
  ];

  toggle(project:any){
    project.show = !project.show;
  }
}