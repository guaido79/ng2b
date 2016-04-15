import {Component, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'ng2b-modal',
    template: `
    <div class="modal fade" tabindex="-1" role="dialog" #ng2bmodal >
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{title}}</h4>
            </div>
            <div class="modal-body">
                <ng-content></ng-content>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal" (click)="onCancelClick($event)" >Close</button>
                <button type="button" class="btn btn-primary" (click)="onConfirmClick($event)" >Save changes</button>
            </div>
            </div>
        </div>
    </div>`
})
export class Ng2bModalComponent implements AfterViewInit {

    @ViewChild('ng2bmodal') ng2bmodal: ElementRef;

    @Input() title: string;

    @Input() show: boolean = false;

    @Output() onConfirm: EventEmitter<any> = new EventEmitter();

    @Output() onCancel: EventEmitter<any> = new EventEmitter();

    ngAfterViewInit() {
        this.modal(this.show);
    }

    onConfirmClick(event) {
        this.onConfirm.emit({ originalEvent: event });
    }

    onCancelClick(event) {
        this.onCancel.emit({ originalEvent: event });
    }

    showDialog(show: boolean) {
        this.show = show;
        this.modal(this.show);
    }

    private modal(show: boolean) {
        $(this.ng2bmodal.nativeElement).modal({ show: show });
    }
}
