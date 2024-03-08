import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./conta_corrente.js";

// criação do cliente1 no cliente.js - nome e cpf
const cliente1 = new Cliente("Vitor Bebiano Mulford", 54463499895);

// criação do cliente2 no cliente.js - nome e cpf
const cliente2 = new Cliente("Prentice Neto", 32001132876);

//criação da conta corrente do cliente 1 - construtores agencias e cliente1
const contaCliente1 = new ContaCorrente(1001, cliente1);

//criação da conta corrente do cliente 2 - construtores agencias e cliente2
const contaCliente2 = new ContaCorrente(1002, cliente2);

//contas para o export contacorrente
contaCliente1.depositar(500);
contaCliente1.sacar(200);
let valor = 300;

// conta para transferencia 
contaCliente1.transferir(valor, contaCliente2);
console.log(contaCliente1);
console.log(contaCliente2);
console.log(ContaCorrente.numeroDeContas)
