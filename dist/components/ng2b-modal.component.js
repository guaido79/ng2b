"use strict";var __decorate=this&&this.__decorate||function(t,e,o,n){var a,i=arguments.length,d=3>i?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,e,o,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(d=(3>i?a(d):i>3?a(e,o,d):a(e,o))||d);return i>3&&d&&Object.defineProperty(e,o,d),d},__metadata=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0},core_1=require("angular2/core"),Ng2bModalComponent=function(){function t(){this.show=!1,this.onConfirm=new core_1.EventEmitter,this.onCancel=new core_1.EventEmitter}return t.prototype.ngAfterViewInit=function(){this.modal(this.show)},t.prototype.onConfirmClick=function(t){this.onConfirm.emit({originalEvent:t})},t.prototype.onCancelClick=function(t){this.onCancel.emit({originalEvent:t})},t.prototype.showDialog=function(t){this.show=t,this.modal(this.show)},t.prototype.modal=function(t){$(this.ng2bmodal.nativeElement).modal({show:t})},__decorate([core_1.ViewChild("ng2bmodal"),__metadata("design:type",core_1.ElementRef)],t.prototype,"ng2bmodal",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],t.prototype,"title",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],t.prototype,"show",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],t.prototype,"onConfirm",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],t.prototype,"onCancel",void 0),t=__decorate([core_1.Component({selector:"ng2b-modal",template:'\n    <div class="modal fade" tabindex="-1" role="dialog" #ng2bmodal >\n        <div class="modal-dialog">\n            <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                <h4 class="modal-title">{{title}}</h4>\n            </div>\n            <div class="modal-body">\n                <ng-content></ng-content>\n            </div>\n            <div class="modal-footer">\n                <button type="button" class="btn btn-default" data-dismiss="modal" (click)="onCancelClick($event)" >Close</button>\n                <button type="button" class="btn btn-primary" (click)="onConfirmClick($event)" >Save changes</button>\n            </div>\n            </div>\n        </div>\n    </div>'}),__metadata("design:paramtypes",[])],t)}();exports.Ng2bModalComponent=Ng2bModalComponent;