import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) { }

  @Input() activeSection = '';
  @Output() scrollTo = new EventEmitter<string>();

  scrollToSection(id: string) {
    this.scrollService.triggerScroll(id);
  }
   
  


}
