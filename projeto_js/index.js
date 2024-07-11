import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./conta/conta_corrente.js";
import { ContaPoupanca } from "./conta/conta_poupanca.js";
import { ContaSalario } from "./conta/conta_salario.js";
import { gerente } from "./funcionario/gerente.js";
import { diretor } from "./funcionario/diretor.js";
import { sistemaAutenticacao } from "../sistemaAutenticacao.js";


// criação do cliente1 no cliente.js - nome e cpf
const cliente1 = new Cliente("Vitor Bebiano Mulford", 54463499895, "150306");

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

console.log("CONTAS");
// Ver tela Conta corrente
console.log("Conta Corrente");
console.table(contaCorrenteVitor);

// Ver tela Conta Poupança
console.log("Conta Poupança");
console.table(contaPoupanca);

// Ver tela Conta Salário
console.log("Conta Salário");
console.table(contaSalario);

// Funcionarios -- Senhas
const diretor1 = new diretor("Rafael", 10000, 12345678900);
diretor1.cadastrarSenha("123456");
const gerente1 = new gerente("Rodrigo", 5000, 9876543210);
gerente1.cadastrarSenha("123");

// CLiente para autentificação 
const clienteAutentificacao = new Cliente("Vitor Bebiano Mulford", 54463499895, "150306");

// Sistema de autenticacao
const gerenteEstaLogado = sistemaAutenticacao.login(gerente1, "123");
const diretorEstaLogado = sistemaAutenticacao.login(diretor1, "123456");
const clienteEstaLogado = sistemaAutenticacao.login(clienteAutentificacao, "150306");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
