import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import {HelloComponent} from './hello';
import {inject, async, TestComponentBuilder} from '@angular/core/testing';

describe('hello component', () => {
  it('should render hello world', async(inject([TestComponentBuilder], tcb => {
    tcb.createAsync(HelloComponent)
      .then(fixture => {
        fixture.detectChanges();
        const hello = fixture.nativeElement;
        expect(hello.querySelector('h1').textContent).toBe('Hello World!');
      });
  })));
});
