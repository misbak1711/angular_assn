import { Component } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-planner',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './trip-planner.component.html',
  styleUrl: './trip-planner.component.css'
})


export class TripPlannerComponent {
  onSubmit(form: NgForm) {
    form.control.markAllAsTouched();
    if (form.valid) {
      // Handle form submission logic here
      console.log('Form submitted', form.value);
      alert("Form Submitted");
      form.reset();
    } else {
      alert("Please fill in all required fields.");
    }
  }
}
