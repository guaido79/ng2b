import {Component, Input, ContentChildren, OnInit, AfterContentInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {COMMON_DIRECTIVES} from 'angular2/common';

/** 
 * Enumeration of all the novbar position
 */
export enum NavbarElementPosition {
    navbar,
    left,
    right
}

/** 
 * Enumeration for container type
 */
export enum NavbarElementContainer {
    form,
    normal
}

@Component({
    selector: 'ng2b-nav-element',
    template: `<li [class.active]='active'  ><ng-content></ng-content></li>`,
    host: {'class': 'nav navbar-nav'}
})
export class Ng2bNavElementComponent {

    private _position: NavbarElementPosition;

    private _container: NavbarElementContainer;

    @Input() active: boolean;

    @Input() role: string;

    @Input('ng2b-position')
    set position(position: string) {
        this._position = NavbarElementPosition[position];
    }

    get position(): string {
        return NavbarElementPosition[this._position];
    }

    @Input('ng2b-container')
    set container(container: string) {
        this._container = NavbarElementContainer[container];
    }

    get container(): string {
        return NavbarElementContainer[this._container];
    }

}

/*@Component({
    selector: 'ng2b-navbar-normal-group',
    template: `
    <ul class="nav navbar-nav" [ngClass]='getPositionMap()' ><ng-content select='ng2b-navbar-element' ></ng-content></ul>`,
    directives: [CORE_DIRECTIVES, Ng2bNavbarElementComponent]
})
export class Ng2bNavbarUlGroupComponent extends Ng2bNavbarGroupComponent {}

@Component({
    selector: 'ng2b-navbar-form-group',
    template: `
    <form class="navbar-form" [ngClass]='getPositionMap()' role='{{role}}'><ng-content select='ng2b-navbar-element' ></ng-content></form>`,
    directives: [CORE_DIRECTIVES, Ng2bNavbarElementComponent]
})
export class Ng2bNavbarFormGroupComponent extends Ng2bNavbarGroupComponent {

        
}*/


@Component({
    selector: 'ng2b-navbar',
    template: `
    <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">
        <div class="container-fluid">

            <div class="navbar-header" *ngIf='showToggle' >
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Brand</a>
            </div>

            <div [ngClass]="{'collapse': showToggle, 'navbar-collapse': showToggle}" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav " *ngIf='isExistGroup(positionToEnum("navbar"), containerToEnum("normal"))' >
                        <ng-content select='[ng2b-position=navbar][ng2b-container=normal]' ></ng-content>
                    </ul>
                    <ul class="nav navbar-nav navbar-left" *ngIf='isExistGroup(positionToEnum("left"), containerToEnum("normal"))' >
                        <ng-content select='[ng2b-position=left][ng2b-container=normal]' ></ng-content>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf='isExistGroup(positionToEnum("right"), containerToEnum("normal"))' >
                        <ng-content select='[ng2b-position=right][ng2b-container=normal]' ></ng-content>
                    </ul>
                    <ul class="navbar-form" *ngIf='isExistGroup(positionToEnum("navbar"), containerToEnum("form"))' >
                        <ng-content select='[ng2b-position=navbar][ng2b-container=form]' ></ng-content>
                    </ul>
                    <ul class="navbar-form navbar-left" *ngIf='isExistGroup(positionToEnum("left"), containerToEnum("form"))' >
                        <ng-content select='[ng2b-position=left][ng2b-container=form]' ></ng-content>
                    </ul>
                    <ul class="navbar-form navbar-right" *ngIf='isExistGroup(positionToEnum("right"), containerToEnum("form"))' >
                        <ng-content select='[ng2b-position=right][ng2b-container=form]' ></ng-content>
                    </ul>
            </div>
        </div>
    </nav>`,
    directives: [CORE_DIRECTIVES, COMMON_DIRECTIVES]
})
export class Ng2bNavbarComponent {

    @Input('show-toggle') showToggle: boolean;

    @ContentChildren(Ng2bNavElementComponent) elements: Ng2bNavElementComponent[];

    positionToEnum(pos: string) : NavbarElementPosition {
        return NavbarElementPosition[pos];
    }
    
    containerToEnum(con: string) : NavbarElementContainer {
        return NavbarElementContainer[con];
    }

    isExistGroup(position: NavbarElementPosition, container: NavbarElementContainer) {
        let retVal = false;
        
        this.elements.forEach((element: Ng2bNavElementComponent) => {
            if (element.container === NavbarElementContainer[container] 
                && element.position === NavbarElementPosition[position]) {
                retVal = true || retVal;
            }
        });
        return retVal;
    }

}
