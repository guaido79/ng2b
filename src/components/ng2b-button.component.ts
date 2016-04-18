import {Component, OnInit, ViewChild, ElementRef, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';

export enum Ng2bButtonType {
    DEFAULT,
    PRIMARY,
    SUCCESS,
    INFO,
    WARNING,
    DANGER,
    LINK
}

@Component({
    selector: 'ng2b-button',
    template: `
    <button #ng2bbutton class='btn'
        [ngClass]='btnClasses' type='button' class='btn'>{{text}}</button>`,
    directives: [NgClass]
})
export class Ng2bButtonComponent implements OnInit {

    @ViewChild('ng2bbutton') button: ElementRef;

    @Input() disabled: boolean;

    @Input() text: string;

    btnClasses: any;

    _buttonType: Ng2bButtonType;

    @Input('button-type')
    set buttonType(value: string) {
        this._buttonType = Ng2bButtonType[value];
    }

    get buttonType(): string {
        return Ng2bButtonType[this._buttonType];
    }

    ngOnInit() {
        this.btnClasses =  {
            'btn-default': this._buttonType === Ng2bButtonType.DEFAULT,
            'btn-primary': this._buttonType === Ng2bButtonType.PRIMARY,
            'btn-success': this._buttonType === Ng2bButtonType.SUCCESS,
            'btn-info': this._buttonType === Ng2bButtonType.INFO,
            'btn-warning': this._buttonType === Ng2bButtonType.WARNING,
            'btn-danger': this._buttonType === Ng2bButtonType.DANGER,
            'btn-link': this._buttonType === Ng2bButtonType.LINK,
            'disabled': this.disabled
        };
    }
}


