// https://angularexperts.io/blog/total-guide-to-jest-esm-and-angular
// https://github.com/thymikee/jest-preset-angular/issues/1149

import { render, screen } from '@testing-library/angular';
import { TestComponent, TestService } from './test.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// describe('TestComponent 1', () => {
//   let component: TestComponent;
//   let fixture: ComponentFixture<TestComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [TestComponent],
//       providers: [TestService],
//     }).compileComponents();
//     fixture = TestBed.createComponent(TestComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('TestComponent 2', () => {

  it('should create', async () => {
    const result = await render(TestComponent, { componentProviders: [TestService] });
    const component = result.fixture.componentInstance;
    expect(component.getName()).toEqual('TestService');
    expect(component.getAge()).toEqual(undefined);
  });
});
