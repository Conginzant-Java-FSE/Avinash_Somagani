import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightSkill]',
  standalone: true
})
export class HighlightSkill {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = '#38bdf8';
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.transform = 'scale(1.05)';
    this.el.nativeElement.style.transition = '0.3s';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
    this.el.nativeElement.style.color = '';
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}