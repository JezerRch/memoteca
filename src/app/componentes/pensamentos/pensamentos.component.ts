import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent {

  constructor(
    private router: Router,
    private listarPensamento: PensamentoService
  ) { }

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  criarPensamento() {
    this.listarPensamento.criar(this.pensamento).subscribe();
    this.router.navigate(['/']);
  }

  cancelar() {
    this.router.navigate(['/']);
  }

}
