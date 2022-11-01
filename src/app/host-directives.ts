import { Component, Directive, HostBinding, inject, Input, OnInit } from '@angular/core';

@Directive({
    selector: 'span[size]',
    standalone: true,
})
export class FontSizeDirective {
    @Input()
    @HostBinding('style.font-size')
    size?: string = 'xxx-large';
}

@Directive({
    selector: 'span[color]',
    standalone: true,
})
export class FontColorDirective {
    @Input()
    @HostBinding('style.color')
    color?: string = 'blue';
}

@Directive({
    selector: 'span[sizedAndColoredText]',
    standalone: true,
    hostDirectives: [
        { directive: FontSizeDirective, inputs: ['size: hostSize'] },
        { directive: FontColorDirective, inputs: ['color: hostColor'] },
    ],
})
export class ComposedDirective implements OnInit {
    private sizeDirective = inject(FontSizeDirective);
    private colorDirective = inject(FontColorDirective);

    ngOnInit() {
        console.log(this.sizeDirective);
        console.log(this.colorDirective);
    }
}

@Directive({
    selector: 'span[decoratedText]',
    standalone: true,
    hostDirectives: [{ directive: ComposedDirective }],
})
export class DecoratedAndComposedDirective {
    @Input()
    @HostBinding('style.text-decoration')
    decoration?: string;
}

@Component({
    selector: 'host-components',
    template: `
        <h1>Host directives</h1>
        <span size="x-large">Large text</span> <br />
        <span color="red">Colored text</span><br />
        <span sizedAndColoredText> Extra large and blue</span> <br />
        <span sizedAndColoredText hostSize="xx-small" hostColor="lime"> Extra large and green</span> <br />
        <span decoratedText decoration="underline"> Extra large and blue and underlined</span> <br />
    `,
    standalone: true,
    imports: [FontSizeDirective, FontColorDirective, ComposedDirective, DecoratedAndComposedDirective],
})
export default class HostDirectives {}
