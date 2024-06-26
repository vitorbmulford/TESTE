// Classe abstrata
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error(
        "Você não deveria instancar um objeto tipo conta Diretamente, pois ele é uma classe abstrata"
      );
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }
  // Setter para a propriedade cliente
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  // Getter para a propriedade cliente
  get cliente() {
    return this._cliente;
  }

  // Getter para a propriedade saldo
  get saldo() {
    return this._saldo;
  }

  // Metodo abstrato
  sacar(valor) {
    throw new Error("O saque está sem valor de taxa");
  }
  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    console.log(
      "Não foi possivel realizar o saque pois esse valor esta indisponivel na conta "
    );
    return 0;
  }
  depositar(valor) {
    this._saldo += valor;
  }
  transferir(valor, conta) {
    // algoritimo para transferir valor
    if (this._tipo == "salario") {
      return;
    }
    console.log("Transferência solicitada");
    if (valor <= 0 || valor > this._saldo) {
      console.log(
        "Impossivel efetuar a transferencia pois o valor da transferencia exede o valor atual da conta"
      );
      return;
    }
    const valorSacado = this._sacar(valor, taxa);
    conta.depositar(valorSacado);
  }
}
