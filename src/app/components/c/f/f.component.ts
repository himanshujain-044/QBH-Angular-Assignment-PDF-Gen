import { Component } from '@angular/core';
import { CService } from '../../../services/c.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { END_POINTS } from '../../../constant/constant';

@Component({
  selector: 'app-f',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './f.component.html',
  styleUrl: './f.component.css',
})
export class FComponent {
  constructor(public cService: CService, public sanitizer: DomSanitizer) {}
  viewPDF = false;
  urlSafe: SafeResourceUrl = '';
  viewGeneratedPDF = () => {
    this.viewPDF = true;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      END_POINTS.PDF_VIEW
    );
  };
}
