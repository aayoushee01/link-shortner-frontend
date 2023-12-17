import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkShortner } from './link-shortner.component';

describe('LinkShortner', () => {
  let component: LinkShortner;
  let fixture: ComponentFixture<LinkShortner>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkShortner]
    });
    fixture = TestBed.createComponent(LinkShortner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
