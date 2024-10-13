import { TestBed } from '@angular/core/testing';
import { TestCmp } from './test.cmp';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('TestCmp', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCmp],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TestCmp);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
