import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CService } from '../../../services/c.service';
import { MESSAGES } from '../../../constant/constant';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
})
export class AComponent {
  messages = MESSAGES;
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(12),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]),
  });
  updateUserData = false;
  userUpdateId = 0;
  successMsg = '';
  errorMsg = '';
  constructor(private cService: CService) {}

  ngOnInit() {
    this.cService.editUserData.subscribe((res) => {
      const { name, email, phone, address } = res;
      this.userForm.setValue({
        name: name || '',
        email: email || '',
        phone: phone?.toString() || null,
        address: address || '',
      });
      this.updateUserData = true;
      this.userUpdateId = Number(res.id);
    });
  }
  onSubmit() {
    const { name, email, phone, address } = this.userForm.value;
    if (this.updateUserData) {
      this.cService
        .updateUser(this.userUpdateId, {
          name: name || '',
          email: email || '',
          phone: Number(phone),
          address: address || '',
        })
        .subscribe({
          next: () => {
            this.successMsg = this.messages.USER_UPDATED;
            this.errorMsg = '';
            this.cService.isUserCreated.next(true);
            this.userUpdateId = 0;
            this.updateUserData = false;
            this.userForm.reset();
          },
          error: (err) => {
            this.successMsg = '';
            this.errorMsg =
              err?.error?.message || this.messages.SOMETHING_WENT_WRONG;
          },
        });
    } else {
      this.cService
        .createUser({
          name: name || '',
          email: email || '',
          phone: Number(phone),
          address: address || '',
        })
        .subscribe({
          next: () => {
            this.successMsg = this.messages.USER_CREATED;
            this.errorMsg = '';
            this.cService.isUserCreated.next(true);
            this.userForm.reset();
          },
          error: (err) => {
            this.errorMsg =
              err?.error?.message || this.messages.SOMETHING_WENT_WRONG;
            this.successMsg = '';
          },
        });
    }
  }
  resetForm = () => {
    this.userForm.reset();
    this.successMsg = '';
    this.errorMsg = '';
    this.userUpdateId = 0;
    this.updateUserData = false;
  };
}
