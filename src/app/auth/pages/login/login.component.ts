import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';


interface ListOption<T = string> {
  code: T;
  title: string;
}

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  PARTNER = 'partner',
}

const ROLES_LIST: ListOption<UserRole>[] = [
  { code: UserRole.ADMIN,   title: 'Админ' },
  { code: UserRole.PARTNER, title: 'Партнер' },
  { code: UserRole.USER,    title: 'Пользователь' },
];

const ROLE_TO_PAGE: Record<UserRole, string> = {
  [UserRole.ADMIN]: 'dashboard',
  [UserRole.PARTNER]: 'dashboard',
  [UserRole.USER]: '',
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent implements OnInit {
  public roles: ListOption<UserRole>[] = ROLES_LIST;

  public roleControl = new FormControl<ListOption<UserRole> | null>(null);

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.roleControl.valueChanges.subscribe((value: any) => {
      const role: UserRole = value.code as UserRole;
      const path = `/app/${ROLE_TO_PAGE[role]}`;
      this.router.navigate([path]);
    });
  }
}
