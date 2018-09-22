import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbassComponent } from './fbass.component';

describe('FbassComponent', () => {
  let component: FbassComponent;
  let fixture: ComponentFixture<FbassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
