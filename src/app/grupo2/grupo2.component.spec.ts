import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grupo2Component } from './grupo2.component';

describe('Grupo2Component', () => {
  let component: Grupo2Component;
  let fixture: ComponentFixture<Grupo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grupo2Component]
    });
    fixture = TestBed.createComponent(Grupo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
