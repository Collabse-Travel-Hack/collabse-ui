import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

import { LayoutsModule } from './layouts/layouts.module';


const TAIGA_MODULES = [
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // HttpClientModule,
    LayoutsModule,
    ...TAIGA_MODULES,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  title = 'collabse-ui';
}
