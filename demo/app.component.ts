import {Component, ViewChild} from 'angular2/core';
import {NG2B_DIRECTIVES, Ng2bModalComponent} from '../src/ng2b';

@Component({
    selector: 'my-app',
    templateUrl: 'demo/app.component.html',
    directives: [NG2B_DIRECTIVES]
})
export class AppComponent {

    @ViewChild('mymodal1') mymodal: Ng2bModalComponent;
    @ViewChild('mymodal2') mymoda2: Ng2bModalComponent;

    log(e: any) {
        console.log(e);
    }

    openDialog1(event: any) {
        this.mymodal.showDialog(true);
    }

    openDialog2(event: any) {
        this.mymoda2.showDialog(true);
    }
}
