import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojisFavsComponent } from './emojis-favs.component';

describe('EmojisFavsComponent', () => {
  let component: EmojisFavsComponent;
  let fixture: ComponentFixture<EmojisFavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmojisFavsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojisFavsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
