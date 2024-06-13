import { Component } from '@angular/core';
import { CService } from '../../services/c.service';
import { BComponent } from './b/b.component';
import { AComponent } from './a/a.component';

@Component({
  selector: 'app-c',
  standalone: true,
  imports: [BComponent, AComponent],
  templateUrl: './c.component.html',
  styleUrl: './c.component.css',
})
export class CComponent {
  constructor(private cService: CService) {}
}
