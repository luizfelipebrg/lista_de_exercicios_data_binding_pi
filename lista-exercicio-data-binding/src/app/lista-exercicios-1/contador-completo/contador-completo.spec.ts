import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContadorCompleto } from './contador-completo';

describe('ContadorCompleto', () => {
  let component: ContadorCompleto;
  let fixture: ComponentFixture<ContadorCompleto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorCompleto],
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorCompleto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
