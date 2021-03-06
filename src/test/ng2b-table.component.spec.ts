import {provide} from 'angular2/core';
import {Ng2bTableComponent} from '../components/ng2b-table.component';
import {setBaseTestProviders, TestComponentBuilder, beforeEachProviders, inject, beforeEach, MockDirectiveResolver} from 'angular2/testing';


describe('Ng2bTableComponent', () => {

    const HTML_RESULT = `
      <table class="table table-bordered table-hover">
          <thead>
              <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
              </tr>
              <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
              </tr>
              <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
              </tr>
          </tbody>
      </table>`;

    let tcb;

    beforeEachProviders(() => [
        TestComponentBuilder,
        Ng2bTableComponent
    ]);

    beforeEach(inject([TestComponentBuilder], _tcb => {
        tcb = _tcb
    }));

    it('should render Bootstrap Table', done => {

        tcb.createAsync(Ng2bTableComponent).then(fixture => {
            let ng2bTable = fixture.componentInstance;
            let ng2bTableNativeElement = fixture.nativeElement;
            fixture.detectChanges(); //trigger change detection
            expect(ng2bTableNativeElement.innerHTML.replace(/ /g,'')).toEqual(HTML_RESULT.replace(/ /g,''));
            done();
        })
            .catch(e => done.fail(e));
    });
});