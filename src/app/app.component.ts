import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BodyComponent } from './body/body.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SideNavComponent, BodyComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = signal('EmployeeDirectory');
  readonly handle_icon  = signal("assets/handle.png");
  readonly isSideNavOpen = signal(true);
  Toggle_nav(){
    this.isSideNavOpen.set(!this.isSideNavOpen());
  }
}
