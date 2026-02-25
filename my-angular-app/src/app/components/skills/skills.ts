import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightSkill } from '../../directives/highlight-skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [HighlightSkill, RouterModule, CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})

export class SkillsComponent {

  skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular' },
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'HTML/CSS' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Java' },
        { name: 'Spring Boot'},
        { name: 'Node.js' },
        { name: 'Python' }
      ]
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'SQL' },
        { name: 'Git/GitHub' },
        { name: 'Docker'}
      ]
    }
  ];

}