import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: ''
  }

}
