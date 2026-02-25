import { Component } from '@angular/core';
import { ExperienceLevelPipe } from '../../pipes/experience-level-pipe';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, DecimalPipe, DatePipe, ExperienceLevelPipe, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  experience = 0;
  dob = new Date(2002, 5, 10);
  careerObjective = "To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.";
}
