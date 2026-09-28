import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TratamentoDeListaVazia } from './tratamento-de-lista-vazia';

describe('TratamentoDeListaVazia', () => {
  let component: TratamentoDeListaVazia;
  let fixture: ComponentFixture<TratamentoDeListaVazia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TratamentoDeListaVazia],
    }).compileComponents();

    fixture = TestBed.createComponent(TratamentoDeListaVazia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
