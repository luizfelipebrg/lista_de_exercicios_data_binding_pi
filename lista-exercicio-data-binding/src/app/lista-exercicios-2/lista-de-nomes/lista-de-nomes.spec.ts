import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDeNomes } from './lista-de-nomes';

describe('ListaDeNomes', () => {
  let component: ListaDeNomes;
  let fixture: ComponentFixture<ListaDeNomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaDeNomes],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDeNomes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
