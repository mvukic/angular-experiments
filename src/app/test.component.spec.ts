import { render } from '@testing-library/angular';
import { TestComponent, TestService } from './test.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory } from '@ngneat/spectator/jest';

describe('TestComponent 1', () => {
  it('should create 1', async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [TestService],
    }).compileComponents();
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    const component: TestComponent = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(component.getName()).toEqual('TestService');
    expect(component.getAge()).toEqual(undefined);
  });
});

describe('TestComponent 2', () => {
  it('should create 2', async () => {
    const { fixture } = await render(TestComponent, { componentProviders: [TestService] });
    const component = fixture.componentInstance;
    expect(component.getName()).toEqual('TestService');
    expect(component.getAge()).toEqual(undefined);
  });
});

describe('TestComponent 3', () => {
  it('should create 3', async () => {
    const createComponent = createComponentFactory({
      component: TestComponent,
      componentProviders: [TestService],
    });
    const spectator = createComponent();
    const component = spectator.component;
    expect(component).toBeTruthy();
    expect(component.getName()).toEqual('TestService');
    expect(component.getAge()).toEqual(undefined);
  });
});