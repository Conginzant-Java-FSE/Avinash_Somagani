import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experienceLevel',
  standalone:true
})
export class ExperienceLevelPipe implements PipeTransform {

  transform(value: number): string {

    if(value < 2) return "Junior";
    if(value < 5) return "Mid-Level";
    return "Senior";
  }
}