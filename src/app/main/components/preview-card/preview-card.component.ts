import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewCardComponent {
  @Input() public title!: string;
}
