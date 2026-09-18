import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContadorDeCurtidas } from './contador-de-curtidas';

describe('ContadorDeCurtidas', () => {
  let component: ContadorDeCurtidas;
  let fixture: ComponentFixture<ContadorDeCurtidas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorDeCurtidas],
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorDeCurtidas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
