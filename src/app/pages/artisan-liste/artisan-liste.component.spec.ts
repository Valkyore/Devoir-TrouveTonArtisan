import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanListeComponent } from './artisan-liste.component';

describe('ArtisanListeComponent', () => {
  let component: ArtisanListeComponent;
  let fixture: ComponentFixture<ArtisanListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtisanListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
