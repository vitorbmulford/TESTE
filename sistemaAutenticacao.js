// Duck type
export class sistemaAutenticacao {
  static login(autenticavel, senha) {
    if (sistemaAutenticacao.ehautenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }
  static ehautenticavel(autenticavel){
    return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
  }
}
