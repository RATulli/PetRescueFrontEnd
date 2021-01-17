import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewPetComponent } from './new-pet.component';

describe('NewPetComponent', () => {
  let component: NewPetComponent;
  let fixture: ComponentFixture<NewPetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
