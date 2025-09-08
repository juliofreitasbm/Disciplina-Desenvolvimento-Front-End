class Edificio {
  constructor(nome, endereco, bairro, cidade, uf) {
    this._nome = nome;
    this._endereco = endereco;
    this._bairro = bairro;
    this._cidade = cidade;
    this._uf = uf;
  }

  get nome() { return this._nome; }
  set nome(v) { this._nome = v; }

  get endereco() { return this._endereco; }
  set endereco(v) { this._endereco = v; }

  get bairro() { return this._bairro; }
  set bairro(v) { this._bairro = v; }

  get cidade() { return this._cidade; }
  set cidade(v) { this._cidade = v; }

  get uf() { return this._uf; }
  set uf(v) { this._uf = v; }

  mostrarDadosEdificio() {
    console.log(`Edifício: ${this._nome}`);
    console.log(`Endereço: ${this._endereco}`);
    console.log(`Bairro: ${this._bairro}`);
    console.log(`Cidade/UF: ${this._cidade}/${this._uf}`);
  }
}

class Pessoa {
  constructor(nome, cpf) {
    this._nome = nome;
    this._cpf = cpf;
  }

  get nome() { return this._nome; }
  set nome(v) { this._nome = v; }

  get cpf() { return this._cpf; }
  set cpf(v) { this._cpf = v; }

  mostrarDadosPessoa() {
    console.log(`Nome: ${this._nome}`);
    console.log(`CPF: ${this._cpf}`);
  }
}

class Morador extends Pessoa {
  constructor(nome, cpf, codigoAcesso) {
    super(nome, cpf);
    this._codigoAcesso = codigoAcesso;
  }

  get codigoAcesso() { return this._codigoAcesso; }
  set codigoAcesso(v) { this._codigoAcesso = v; }

  mostrarDadosMorador() {
    super.mostrarDadosPessoa();
    console.log(`Código de Acesso: ${this._codigoAcesso}`);
  }
}

class Apartamento {
  constructor(numero, edificio, andar, bloco, morador) {
    this._numero = numero;
    this._edificio = edificio;   // objeto Edificio
    this._andar = andar;
    this._bloco = bloco;
    this._morador = morador;     // objeto Morador (um único)
  }

  get numero() { return this._numero; }
  set numero(v) { this._numero = v; }

  get edificio() { return this._edificio; }
  set edificio(v) { this._edificio = v; }

  get andar() { return this._andar; }
  set andar(v) { this._andar = v; }

  get bloco() { return this._bloco; }
  set bloco(v) { this._bloco = v; }

  get morador() { return this._morador; }
  set morador(v) { this._morador = v; }

  mostrarDadosApartamento() {
    console.log(`Apartamento: ${this._numero} | Andar: ${this._andar} | Bloco: ${this._bloco}`);
    console.log(`Edifício: ${this._edificio.nome}`);
    console.log(`--- Morador ---`);
    this._morador.mostrarDadosMorador();
  }
}

class Main {
  static main() {
    const edificio = new Edificio(
      "Residencial Sol Nascente",
      "Rua das Flores, 123",
      "Centro",
      "São Paulo",
      "SP"
    );

    // 5 moradores (um para cada apto)
    const m1 = new Morador("Ana Silva",   "123.456.789-00", "A1B2C3");
    const m2 = new Morador("Bruno Souza", "987.654.321-00", "D4E5F6");
    const m3 = new Morador("Carla Lima",  "123.456.789-01", "G7H8I9");
    const m4 = new Morador("Diego Rocha", "123.456.789-02", "J1K2L3");
    const m5 = new Morador("Eva Prado",   "987.654.321-02", "M4N5O6");

    // 5 apartamentos (cada um com UM morador)
    const a1 = new Apartamento(101, edificio, 1, "A", m1);
    const a2 = new Apartamento(102, edificio, 1, "A", m2);
    const a3 = new Apartamento(201, edificio, 2, "A", m3);
    const a4 = new Apartamento(202, edificio, 2, "A", m4);
    const a5 = new Apartamento(301, edificio, 3, "B", m5);

    [a1, a2, a3, a4, a5].forEach(ap => {
      ap.mostrarDadosApartamento();
      console.log("-----");
    });
  }
}

Main.main();
