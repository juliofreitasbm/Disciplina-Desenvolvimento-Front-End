
class Pessoa {
  constructor(nome = '', cpf = '') {
    this._nome = nome;
    this._cpf = cpf;
  }

  // getters e setters
  getNome() { return this._nome; }
  setNome(nome) { this._nome = nome; }

  getCpf() { return this._cpf; }
  setCpf(cpf) { this._cpf = cpf; }

  mostrarDadosPessoa() {
    console.log(`Nome: ${this._nome}`);
    console.log(`CPF: ${this._cpf}`);
  }
}


class Morador extends Pessoa {
  constructor(nome = '', cpf = '', codigoAcesso = '') {
    super(nome, cpf);
    this._codigoAcesso = codigoAcesso;
  }

  getCodigoAcesso() { return this._codigoAcesso; }
  setCodigoAcesso(codigo) { this._codigoAcesso = codigo; }

  mostrarDadosMorador() {
    super.mostrarDadosPessoa();
    console.log(`Código de Acesso: ${this._codigoAcesso}`);
  }
}

class Edificio {
  constructor(nome = '', endereco = '', bairro = '', cidade = '', uf = '') {
    this._nome = nome;
    this._endereco = endereco;
    this._bairro = bairro;
    this._cidade = cidade;
    this._uf = uf;
  }

  getNome() { return this._nome; }
  setNome(nome) { this._nome = nome; }

  getEndereco() { return this._endereco; }
  setEndereco(endereco) { this._endereco = endereco; }

  getBairro() { return this._bairro; }
  setBairro(bairro) { this._bairro = bairro; }

  getCidade() { return this._cidade; }
  setCidade(cidade) { this._cidade = cidade; }

  getUf() { return this._uf; }
  setUf(uf) { this._uf = uf; }


  mostrarDadosEdificio() {
    console.log(`Edifício: ${this._nome}`);
    console.log(`Endereço: ${this._endereco}`);
    console.log(`Bairro: ${this._bairro}`);
    console.log(`Cidade: ${this._cidade}`);
    console.log(`UF: ${this._uf}`);
  }
}

class Apartamento {
  constructor(numero = 0, andar = 0, bloco = '', edificio = null, morador = null) {
    this._numero = numero;
    this._andar = andar;
    this._bloco = bloco;
    this._edificio = edificio; // instancia de Edificio
    this._morador = morador;   // instância do Morador
  }

  // getters e setters
  getNumero() { return this._numero; }
  setNumero(numero) { this._numero = numero; }

  getAndar() { return this._andar; }
  setAndar(andar) { this._andar = andar; }

  getBloco() { return this._bloco; }
  setBloco(bloco) { this._bloco = bloco; }

  getEdificio() { return this._edificio; }
  setEdificio(edificio) { this._edificio = edificio; }

  getMorador() { return this._morador; }
  setMorador(morador) { this._morador = morador; }


  mostrarDadosApartamento() {
    console.log('----------');
    console.log(`Apartamento: ${this._numero}`);
    console.log(`Andar: ${this._andar}`);
    console.log(`Bloco: ${this._bloco}`);

    if (this._edificio instanceof Edificio) {
      console.log('--- Dados do Edifício --');
      this._edificio.mostrarDadosEdificio();
    } else {
      console.log('Edifício: (não definido)');
    }

    if (this._morador instanceof Morador) {
      console.log('---Dados do Morador ---');
      this._morador.mostrarDadosMorador();
    } else {
      console.log('Morador: (não definido)');
    }

    console.log('----------\n');
  }
}

class Main {
  static main() {
    // Criando edifício
    const edif = new Edificio(
      'Residencial Taiana',
      'Av. T85, 123',
      'Jardim Planalto',
      'Goiânia',
      'GO'
    );

    // Criando moradores
    const morador1 = new Morador('Julio Cesar', '0123456789', 'A1001');
    const morador2 = new Morador('Paulo', '9876543210', 'B2002');


    // Criando apartamentos do mesmo edifício
    const apt1 = new Apartamento(101, 1, 'A', edif, morador1);
    const apt2 = new Apartamento(201, 2, 'A', edif, morador2);

    // Mostrando apartamentos
    apt1.mostrarDadosApartamento();
    apt2.mostrarDadosApartamento();
  }
}

// Executa o Main
Main.main();
