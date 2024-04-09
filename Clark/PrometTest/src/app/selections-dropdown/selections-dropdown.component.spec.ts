import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionsDropdownComponent } from './selections-dropdown.component';

describe('SelectionsDropdownComponent', () => {
  let component: SelectionsDropdownComponent;
  let fixture: ComponentFixture<SelectionsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionsDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
