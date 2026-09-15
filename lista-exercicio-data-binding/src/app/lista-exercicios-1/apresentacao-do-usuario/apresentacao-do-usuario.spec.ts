import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApresentacaoDoUsuario } from './apresentacao-do-usuario';

describe('ApresentacaoDoUsuario', () => {
  let component: ApresentacaoDoUsuario;
  let fixture: ComponentFixture<ApresentacaoDoUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApresentacaoDoUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(ApresentacaoDoUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
