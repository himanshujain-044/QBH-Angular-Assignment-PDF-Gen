import { Component } from '@angular/core';
import { CService } from '../../../services/c.service';

@Component({
  selector: 'app-d',
  standalone: true,
  imports: [],
  templateUrl: './d.component.html',
  styleUrl: './d.component.css',
})
export class DComponent {
  constructor(private cService: CService) {}
  generatePDF = () => {
    this.cService.generatePDF.next(true);
  };
}
