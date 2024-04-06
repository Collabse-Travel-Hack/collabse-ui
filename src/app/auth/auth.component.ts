import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  TuiButtonModule,
  TuiDataListModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiSelectModule,
} from '@taiga-ui/kit';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const TAIGA_MODULES = [
  TuiButtonModule,
  TuiDataListModule,
  TuiDataListWrapperModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiSelectModule,
  TuiTextfieldControllerModule,
];

interface ListOption<T = string> {
  code: T;
  title: string;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  PARTNER = 'partner',
}
export const ROLES_LIST: ListOption<UserRole>[] = [
  { code: UserRole.ADMIN,   title: 'Админ' },
  { code: UserRole.PARTNER, title: 'Партнер' },
  { code: UserRole.USER,    title: 'Пользователь' },
];

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ...BASE_MODULES,
    ...TAIGA_MODULES,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.less'
})
export class AuthComponent {
  public roles: ListOption<UserRole>[] = ROLES_LIST;

  public roleControl = new FormControl<ListOption<UserRole> | null>(null);
}
