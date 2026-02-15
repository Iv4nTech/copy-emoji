import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmojiComponent } from './detail-emoji.component';

describe('DetailEmojiComponent', () => {
  let component: DetailEmojiComponent;
  let fixture: ComponentFixture<DetailEmojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEmojiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEmojiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
