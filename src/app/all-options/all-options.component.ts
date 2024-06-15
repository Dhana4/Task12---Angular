import { CommonModule } from '@angular/common';
import { Component ,Input, signal} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-all-options',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive] ,
  templateUrl: './all-options.component.html',
  styleUrl: './all-options.component.scss'
})
export class AllOptionsComponent {
  @Input() isSideNavOpen = signal(true);
  isActive = signal(false);
  @Input()  all_options = { optionIcon: "defaultIcon", optionHead: "default option" , routeName : ""};
  constructor(private router : Router){
  }
  ngOnInit() {
    this.router.events.subscribe({
      next: (event) => {
        if(event instanceof NavigationEnd) {
          if(event.url.includes(this.all_options.routeName)) {
            this.isActive.set(true);
          } else {
            this.isActive.set(false);
          }
        }
      }
    })
  }

}
