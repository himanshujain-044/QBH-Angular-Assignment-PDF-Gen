import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CComponent } from './components/c/c.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CComponent],
  providers: [BrowserModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HBQ Assignment';
  
}
