import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  readonly search_icon = signal("assets/bx-search.png");
  readonly categories_icon = signal("assets/Categories.svg");
  readonly language_icon = signal("assets/Language.svg");
  readonly mode_icon = signal("assets/Mode.svg");
  readonly notifications_icon = signal("assets/Notifications.svg");
  readonly admin_icon = signal("assets/admin.jpg");
  readonly down_arrow_icon = signal("assets/down-arrow.jpg");
}
