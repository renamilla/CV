import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grupo7Component } from './grupo7.component';

describe('Grupo7Component', () => {
  let component: Grupo7Component;
  let fixture: ComponentFixture<Grupo7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grupo7Component]
    });
    fixture = TestBed.createComponent(Grupo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
