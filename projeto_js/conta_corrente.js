import { Cliente } from "./cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0 
    agencia;  // atributos
    _cliente;
    _saldo = 0;
    
   
    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    // Metodo para deixar declarar o cliente na contaCorrente apenas se for um cliente 
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }
    }

    // Metodo que serve para dar acesso visual ao cliente no cmd
    get cliente(){
        return this._cliente;
    }
    
    // Metodo que serve para dar acesso visual ao saldo no cmd
    get saldo(){
        return this._saldo;
    }

    sacar(valor) { // algoritimo para sacar 
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
        return 0;
    }

    depositar(valor) { // algoritimo para desopitar o valor na conta
        if(valor <= 0) 
        {
            return;
        }
        this._saldo += valor;
    }
    transferir(valor, conta){ // algoritimo para transferir valor
        console.log("Transferência solicitada");
        if(valor <= 0 || valor > this._saldo){
            console.log("Impossivel efetuar a transferencia pois o valor da transferencia exede o valor atual da conta");
            return;
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}