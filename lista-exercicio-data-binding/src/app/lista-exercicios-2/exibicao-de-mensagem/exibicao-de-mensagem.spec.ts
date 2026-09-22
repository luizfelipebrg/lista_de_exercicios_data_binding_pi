import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExibicaoDeMensagem } from './exibicao-de-mensagem';

describe('ExibicaoDeMensagem', () => {
  let component: ExibicaoDeMensagem;
  let fixture: ComponentFixture<ExibicaoDeMensagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibicaoDeMensagem],
    }).compileComponents();

    fixture = TestBed.createComponent(ExibicaoDeMensagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
