import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./conta/conta_corrente.js";
import { ContaPoupanca } from "./conta/conta_poupanca.js";
import { ContaSalario } from "./conta/conta_salario.js";

// criação do cliente1 no cliente.js - nome e cpf
const cliente1 = new Cliente("Vitor Bebiano Mulford", 54463499895);

const contaCorrenteVitor = new ContaCorrente(0, cliente1, 1001); // Conta corrente
const contaPoupanca = new ContaPoupanca(0, cliente1, 1001); // Conta poupança
const contaSalario = new ContaSalario(cliente1); // Conta salário

// operações para a conta corrente
contaCorrenteVitor.depositar(1000);
contaCorrenteVitor.sacar(500);

// operações para a conta poupança
contaPoupanca.depositar(1000);
contaPoupanca.sacar(500);

// operações para a conta salário
contaSalario.depositar(1000);
contaSalario.sacar(500);


// Ver tela Conta corrente
console.log("Conta Corrente");
console.table(contaCorrenteVitor);

// Ver tela Conta Poupança
console.log("Conta Poupança");
console.table(contaPoupanca);

// Ver tela Conta Poupança
console.log("Conta Salário");
console.table(contaSalario);
