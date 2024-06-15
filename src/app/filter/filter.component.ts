import { Component} from '@angular/core';
import {CommonModule} from '@angular/common'
import { MultiSelectModule } from 'primeng/multiselect';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, MultiSelectModule, ReactiveFormsModule, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  statusOptions : string[] = [
    'Active', 'Inactive'
  ];
  selectedStatus: string = "";
  locationOptions : any[] = [
    'New York', 'Los Angeles','Chicago','Mumbai','Delhi','Bangalore','Hyderabad'
  ];
  departmentOptions: string[] = [
    'Engineering','Marketing','Finance','Human Resources','Product Management','Customer Success','Quality Assurance'
  ];
  selectedDepartments: string[] = [];
  selectedLocations: string[] = [];
}
