export class Conta {
  constructor(saldoInicial, cliente, agencia) {
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

  // Método para sacar dinheiro
  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
    return 0; // Retorna 0 se não houver saldo suficiente
  }

  sacar(valor) {
    // algoritimo para sacar
    let taxa = 1;
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
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
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
