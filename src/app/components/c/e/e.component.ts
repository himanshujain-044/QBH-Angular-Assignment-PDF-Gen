import { Component } from '@angular/core';
import { CService } from '../../../services/c.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-e',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './e.component.html',
  styleUrl: './e.component.css',
})
export class EComponent {
  constructor(public cService: CService) {}
  downloadPDF = () => {
    window.open('http://localhost:3000/users/pdf/download');
  };
}
