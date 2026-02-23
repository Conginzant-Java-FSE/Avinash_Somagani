import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightSkill } from '../../directives/highlight-skill';

@Component({
  selector: 'app-skills',
  standalone: true,
imports: [      HighlightSkill,RouterModule,CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})

export class SkillsComponent {

  skills = [
     {name:'Java', level:'Advanced'},
    {name:'Angular', level:'Intermediate'},
    {name:'Spring Boot', level:'Advanced'},
    {name:'SQL', level:'Intermediate'}
  ];

}