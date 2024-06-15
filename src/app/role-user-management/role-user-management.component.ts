import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-role-user-management',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './role-user-management.component.html',
  styleUrl: './role-user-management.component.scss'
})
export class RoleUserManagementComponent {
  readonly dropdown_icon = signal("assets/right-arrow.png");
  @Input() isSideNavOpen  = signal(true);
  isActive = signal(false);
  @Input() role_userManagement = { icon : "default icon" , content : "default content", routerName : ""};
  constructor(private router : Router){
    
  }
  ngOnInit(){
    this.router.events.subscribe(
      {next:(event)=>{
      if(event instanceof NavigationEnd){
        if(event.url.includes(this.role_userManagement.routerName)) {
          this.isActive.set(true);
        } else {
          this.isActive.set(false);
        }
      }
      }
     })
  }
}
