import {Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter} from 'angular2/core';
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
        [ngClass]="{
            'btn-default': btnDefault, 
            'btn-primary': btnPrimary,
            'btn-success': btnSuccess,
            'btn-info': btnInfo,
            'btn-warning': btnWarning,
            'btn-danger': btnDanger,
            'btn-link': btnLink,
            'disabled': disabled}" type='button' class='btn'>{{text}}</button>`,
    directives: [NgClass]
})
export class Ng2bButtonComponent implements OnInit {

    private btnDefault: boolean;
    private btnPrimary: boolean;
    private btnSuccess: boolean;
    private btnInfo: boolean;
    private btnWarning: boolean;
    private btnDanger: boolean;
    private btnLink: boolean;
    
    @ViewChild('ng2bbutton') button: ElementRef;
    
    @Input() disabled: boolean;

    @Input() text: string;
    
    @Input('button-type') buttonType: string;

    ngOnInit() {
        this.btnDefault = this.buttonType === Ng2bButtonType[Ng2bButtonType.DEFAULT];
        this.btnPrimary = this.buttonType === Ng2bButtonType[Ng2bButtonType.PRIMARY];
        this.btnSuccess = this.buttonType === Ng2bButtonType[Ng2bButtonType.SUCCESS];
        this.btnInfo = this.buttonType === Ng2bButtonType[Ng2bButtonType.INFO];
        this.btnWarning = this.buttonType === Ng2bButtonType[Ng2bButtonType.WARNING];
        this.btnDanger = this.buttonType === Ng2bButtonType[Ng2bButtonType.DANGER];
        this.btnLink = this.buttonType === Ng2bButtonType[Ng2bButtonType.LINK];
    }
}


