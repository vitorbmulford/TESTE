import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./conta_corrente.js";
import {ContaPoupanca} from "./conta_poupanca.js";
import {Conta} from "./Conta.js";

// criação do cliente1 no cliente.js - nome e cpf
const cliente1 = new Cliente("Vitor Bebiano Mulford", 54463499895);


const contaCorrenteVitor = new ContaCorrente(cliente1, 1001)
contaCorrenteVitor.depositar(500);
contaCorrenteVitor.sacar(100);
//contas para o export contacorrente

const contaPoupanca = new ContaPoupanca(0, cliente1, 1001); // Changed variable name
contaPoupanca.depositar(100);
contaPoupanca.sacar(50);
console.log(contaCorrenteVitor)
console.log(contaPoupanca);
