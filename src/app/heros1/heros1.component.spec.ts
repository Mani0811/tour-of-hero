import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heros1Component } from './heros1.component';

describe('Heros1Component', () => {
  let component: Heros1Component;
  let fixture: ComponentFixture<Heros1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Heros1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Heros1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
