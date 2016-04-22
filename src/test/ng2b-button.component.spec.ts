import {provide} from 'angular2/core';
import {Ng2bButtonComponent} from '../components/ng2b-button.component';
import {setBaseTestProviders, TestComponentBuilder, beforeEachProviders, inject, beforeEach, MockDirectiveResolver} from 'angular2/testing';


describe('Ng2bButtonComponent', () => {


    let tcb;

    beforeEachProviders(() => [
        TestComponentBuilder,
        Ng2bButtonComponent
    ]);

    beforeEach(inject([TestComponentBuilder], _tcb => {
        tcb = _tcb
    }));

    it('should render Bootstrap Button', done => {

        tcb.createAsync(Ng2bButtonComponent).then(fixture => {
            let ng2bButton: Ng2bButtonComponent = fixture.componentInstance;
            ng2bButton.buttonType = 'DEFAULT';
            ng2bButton.text = 'TEXT';
            let ng2bButtonNativeElement = fixture.nativeElement;
            fixture.detectChanges(); //trigger change detection
            expect(ng2bButtonNativeElement.innerHTML).toBeDefined();
            done();
        })
            .catch(e => done.fail(e));
    });
});