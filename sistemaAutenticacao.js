export class sistemaAutenticacao{
    static login(funcionario, senha){
        return funcionario.senha == senha
    }
    static login_cliente(cliente, senha){
        return cliente._senha == senha
    }
}