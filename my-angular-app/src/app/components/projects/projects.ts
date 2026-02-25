import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {

  projects = [
    {
      name: 'RevHire Platform',
      details: 'Microservices based hiring system for streamlined recruitment. Built using Spring Boot, Angular, and PostgreSQL with a focus on high availability and fault tolerance.',
      techStack: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
      show: false
    },
    {
      name: 'AI Chatbot Assistant',
      details: 'Intelligent conversational agent designed to assist diabetic patients with daily management, dietary tracking, and vital logging.',
      techStack: ['Python', 'TensorFlow', 'NLP', 'React'],
      show: false
    },
    {
      name: 'E-Commerce Dashboard',
      details: 'A comprehensive analytics dashboard for online retailers. Provides real-time insights into sales, inventory, and user behavior.',
      techStack: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
      show: false
    }
  ];

  toggle(project: any) {
    project.show = !project.show;
  }
}