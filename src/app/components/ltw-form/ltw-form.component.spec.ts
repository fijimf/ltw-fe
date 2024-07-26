import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtwFormComponent } from './ltw-form.component';

describe('LtwFormComponent', () => {
  let component: LtwFormComponent;
  let fixture: ComponentFixture<LtwFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LtwFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LtwFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
