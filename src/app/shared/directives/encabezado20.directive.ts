import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEncabezado20]'
})
export class Encabezado20Directive {

  constructor(private elementRef: ElementRef,private renderer: Renderer2) { 
    
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '20px')
  }

}
