import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Jezer',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I love Angular',
      autoria: 'Jezer',
      modelo: 'modelo3'
    }
  ];

}
