import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CComponent } from './components/c/c.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HBQ Assignment';
}
