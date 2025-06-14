// scroll.service.ts
import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private sectionMap: Map<string, ElementRef> = new Map();

  registerSection(id: string, element: ElementRef) {
    this.sectionMap.set(id.toLowerCase(), element);
    console.log(`id , ${id}  element , ${element}`);
    
  }
  triggerScroll(id: string) {
  const section = this.sectionMap.get(id.toLowerCase());
  if (section) {
    setTimeout(() => {
      section.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  } else {
    console.warn(`Section ${id} not found`);
  }
}

}
