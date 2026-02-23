import { Component } from '@angular/core';
import { ExperienceLevelPipe } from '../../pipes/experience-level-pipe';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule,DecimalPipe, DatePipe, ExperienceLevelPipe, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
    experience = 0;
    dob = new Date(2002,5,10);
}
