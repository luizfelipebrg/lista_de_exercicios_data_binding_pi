import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SituacaoDoEstoque } from './situacao-do-estoque';

describe('SituacaoDoEstoque', () => {
  let component: SituacaoDoEstoque;
  let fixture: ComponentFixture<SituacaoDoEstoque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SituacaoDoEstoque],
    }).compileComponents();

    fixture = TestBed.createComponent(SituacaoDoEstoque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
