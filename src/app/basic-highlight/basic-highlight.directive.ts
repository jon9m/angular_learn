import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    ngOnInit(): void {
        this.elementRef.nativeElement.style.border = "red solid 2px";
        this.elementRef.nativeElement.style.backgroundColor = "yellow";
    }

    constructor(private elementRef: ElementRef) {
    }
}