import { Directive,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {


  constructor(private el: ElementRef) {
    this.highlight(this.highlightColor || this.defaultColor || 'purple');
   }
  @Input() defaultColor: string;
  @Input('myHighlight') highlightColor: string;


  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
