import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListpetsComponent } from './listpets.component';

describe('ListpetsComponent', () => {
  let component: ListpetsComponent;
  let fixture: ComponentFixture<ListpetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
