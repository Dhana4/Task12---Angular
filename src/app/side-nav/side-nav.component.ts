import { Component, Input, signal} from '@angular/core';
import { AllOptionsComponent } from '../all-options/all-options.component';
import { CommonModule } from '@angular/common';
import { RoleUserManagementComponent } from '../role-user-management/role-user-management.component';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [AllOptionsComponent,CommonModule, RoleUserManagementComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  readonly all = signal("ALL");
  readonly roles_management = signal("Role / User Management");
  readonly tezo_logo_icon = signal("assets/TezoLogo.png");
  readonly tezo_icon = signal("assets/tezo_icon.jpg");
  readonly roles = signal("Role");

  readonly all_options = [
    { optionIcon: "assets/Dashboard.svg", optionHead: "Dashboard" , routeName : "home"},
    { optionIcon: "assets/team_svgrepo.com.svg", optionHead: "Employees" , routeName: "employees"}
  ];
  role_userManagement = [
    { icon : "assets/Roles.svg" , content : "Roles", routerName : "roles"},
    { icon : "assets/assign user.svg" , content : "Access Rights" , routerName : "home"}
  ];
  @Input() isSideNavOpen = signal(false);
}
