import { Component } from '@angular/core';
import { DComponent } from '../d/d.component';
import { EComponent } from '../e/e.component';
import { FComponent } from '../f/f.component';
import { MatTableModule } from '@angular/material/table';
import { CService } from '../../../services/c.service';
import { CommonModule } from '@angular/common';
import { MESSAGES } from '../../../constant/constant';

export interface User {
  id: number;
  name: string;
  email: number;
  phone: number | string;
  address: string;
  action: boolean;
}

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [DComponent, EComponent, FComponent, MatTableModule, CommonModule],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css',
})
export class BComponent {
  constructor(private cService: CService) {}
  messages = MESSAGES;
  displayedColumns: string[] = ['name', 'email', 'phone', 'address', 'id'];
  dataSource: User[] = [];
  editUserData = (params: User | any) => {
    this.cService.editUserData.next({
      ...params,
    });
  };
  deleteUser = (params: User) => {
    this.cService.deleteUser(params?.id).subscribe((res) => {
      this.cService.isUserCreated.next(true);
    });
  };
  ngOnInit() {
    this.cService.isUserCreated.subscribe((isUserCreated) => {
      if (isUserCreated) {
        this.cService.getAllUsers().subscribe((res) => {
          this.dataSource = res;
          this.cService.isUserCreated.next(false);
        });
      }
    });
  }
}
