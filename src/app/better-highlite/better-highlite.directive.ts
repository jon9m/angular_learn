import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlite]'
})
export class BetterHighliteDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highligtColor: string = '#add8e6';

  @HostBinding('style.backgroundColor') backGroundColor: string;

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#add8e6');

    this.backGroundColor = this.highligtColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backGroundColor = this.defaultColor;
  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#add8e6');
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
}
