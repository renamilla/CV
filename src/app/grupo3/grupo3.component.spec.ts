import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grupo3Component } from './grupo3.component';

describe('Grupo3Component', () => {
  let component: Grupo3Component;
  let fixture: ComponentFixture<Grupo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grupo3Component]
    });
    fixture = TestBed.createComponent(Grupo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
