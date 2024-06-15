import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { LetterComponent } from '../letter/letter.component';
import { FilterComponent } from '../filter/filter.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-employee-body',
  standalone: true,
  imports: [CommonModule,SearchComponent,LetterComponent, FilterComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './employee-body.component.html',
  styleUrl: './employee-body.component.scss'
})
export class EmployeeBodyComponent {
  readonly letters = signal(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]);
}
