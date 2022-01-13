import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COSearchComponent } from './cosearch.component';

describe('COSearchComponent', () => {
  let component: COSearchComponent;
  let fixture: ComponentFixture<COSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
