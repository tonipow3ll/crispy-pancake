import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightballComponent } from './eightball.component';

describe('EightballComponent', () => {
  let component: EightballComponent;
  let fixture: ComponentFixture<EightballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EightballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
