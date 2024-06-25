import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
  static numeroDeContas = 0;
  constructor(agencia, cliente) {
      super(0, cliente, agencia);
      ContaCorrente.numeroDeContas += 1;
  }
  sacar(valor){
    let taxa = 1.1
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
      this._saldo -= valorSacado;
      return valorSacado
    }
  }
}