import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  constructor(agencia, cliente) {
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }
  sacar(valor) {
    let taxa = 1.1;
    return super._sacar(valor, taxa);
  }
}
