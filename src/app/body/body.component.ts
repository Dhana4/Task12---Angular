import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { LetterComponent } from '../letter/letter.component';
import { FilterComponent } from '../filter/filter.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule,SearchComponent,LetterComponent, FilterComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  
}
