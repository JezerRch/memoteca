import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {

  constructor(
    private router: Router,
    private listarPensamento: PensamentoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listarPensamento.lista().subscribe((listaPensamentos) =>
      this.listaPensamentos = listaPensamentos
    );

    const id = this.route.snapshot.paramMap.get('id');
    const idNumero = parseInt(id!);
    this.listarPensamento.buscarPorID(idNumero).subscribe((listaPensamentos) => {
      this.pensamento = listaPensamentos;
    });
  }

  listaPensamentos: Pensamento[] = [];

  pensamento: Pensamento | null = null;

  direcionarPensamento() {
    this.router.navigate(['/criar-pensamento']);
  }

  larguraPensamento(): string {
    if (this.listaPensamentos[0].conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  // Verificar o que esta dando erro
  // delete() {
  //   if (this.pensamento) {
  //     this.listarPensamento.delete(this.listaPensamentos.id).subscribe(() => {

  //     });
  //   }
  // }


}
