import { Component, OnInit,Input } from '@angular/core';
import { FormComponent } from '../form/form.component';

import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent,  RouterOutlet,  CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  isNavHidden: boolean = true;

  toggleNav() {
    this.isNavHidden = !this.isNavHidden;
  }
}