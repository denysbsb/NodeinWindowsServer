import { Component, OnInit, Output } from '@angular/core';
import { ListarUsuarioAcoes, ListarUsuarioDados } from './listar-usuario/listar-usuario.component'
@Component({
  selector: 'app-manter-usuario',
  templateUrl: './manter-usuario.component.html',
  styleUrls: ['./manter-usuario.component.css']
})
export class ManterUsuarioComponent implements OnInit {

  listaUsuarios: ListarUsuarioDados[] = [];
  constructor() {   }

  ngOnInit() {
  }

  pesquisarUsuario() {
    this.listaUsuarios = this.gerarAmostra();

  }

  gerarAmostra() {
    var dados = [];
    const nomes = ["Maria", "João", "Fulano"]
    const emails = ["maria@teste.com", "joao@teste.com", "fulano@teste.com"]
    const cpfs = ["04558985340", "04558985341", "04558985342"]
    const unidades = ["DF", "SP", "CE"]
    const perfil = ["Admin", "Admin", "Admin"]

    for (let i = 0; i < nomes.length; i++) {
      var acoes: ListarUsuarioAcoes = { editar: true, visualizar: true, excluir: true };
      var info: ListarUsuarioDados =
        {
          id: i,
          nome: nomes[i],
          email: emails[i],
          cpf: cpfs[i],
          unidade: unidades[i],
          perfil: perfil[i],
          acoes,
        }
      dados.push(info);
    }
    return dados;
  }
}
