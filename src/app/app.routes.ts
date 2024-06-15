import { Routes } from '@angular/router';
import { RoleBodyComponent } from './role-body/role-body.component';
import { EmployeeBodyComponent } from './employee-body/employee-body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const routes: Routes = [
    {path : '' , component : EmployeeBodyComponent},
    {path : 'employees' , component : EmployeeBodyComponent},
    {path: 'roles', component: RoleBodyComponent},
    {path : 'addEmployee' , component : AddEmployeeComponent},
    {path : 'home',component:DashboardComponent},
    {path : '**', component: PageNotFoundComponent},
];
