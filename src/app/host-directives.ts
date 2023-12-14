import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
} from '@angular/core';

@Directive({
  selector: 'span[size]',
  standalone: true,
  host: { '[style.font-size]': 'sizeValue' },
})
export class FontSize {
  @Input()
  sizeValue?: string = 'xxx-large';
}

@Directive({
  selector: 'span[color]',
  standalone: true,
  host: { '[style.color]': 'colorValue' },
})
export class FontColor {
  @Input()
  colorValue?: string = 'blue';
}

@Directive({
  selector: 'span[size-color]',
  standalone: true,
  hostDirectives: [
    { directive: FontSize, inputs: ['sizeValue'] },
    { directive: FontColor, inputs: ['colorValue'] },
  ],
})
export class FontSizeAndColor {}

@Directive({
  selector: 'span[decorated-text]',
  standalone: true,
  hostDirectives: [{ directive: FontSizeAndColor }],
  host: {
    '[style.text-decoration]': 'decoration',
  },
})
export class FontDecorateAndSizeAndColor {
  @Input()
  decoration?: string;
}

@Component({
  selector: 'host-components',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontSize, FontColor, FontSizeAndColor, FontDecorateAndSizeAndColor],
  styles: `:host { view-transition-name: count; }`,
  template: `
    <h1>Host directives</h1>
    <span size="x-large">Large text</span>
    <br />
    <span color="red">Colored text</span>
    <br />
    <span size-color sizeValue="xx-small" colorValue="lime">
      Extra small and lime
    </span>
    <br />
    <span size-color> Extra large and blue</span>
    <br />
    <span decorated-text decoration="underline">
      Extra large and blue and underlined
    </span>
  `,
})
export default class HostDirectives {}
