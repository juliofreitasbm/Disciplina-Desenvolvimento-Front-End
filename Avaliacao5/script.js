class Edificio {
  constructor(nome, endereco, bairro, cidade, uf) {
    this.nome = nome;
    this.endereco = endereco;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
  }
  
  mostrarDadosEdificio() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Endereço: ${this.endereco}`);
    console.log(`Bairro: ${this.bairro}`);
    console.log(`Cidade: ${this.cidade}`);
    console.log(`UF: ${this.uf}`);
  }
}

class Apartamento {
  constructor(numero, edificio, andar, bloco, moradores) {
    this.numero = numero;
    this.edificio = edificio;
    this.andar = andar;
    this.bloco = bloco;
    this.moradores = moradores;
  }

  mostrarDadosApartamento() {
    console.log(`Número: ${this.numero}`);
    console.log(`Edifício: ${this.edificio}`);
    console.log(`Andar: ${this.andar}`);
    console.log(`Bloco: ${this.bloco}`);
    console.log(`Moradores: ${this.moradores.join(", ")}`);
  }
};

class Pessoa {
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }

  mostrarDadosPessoa() {
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${this.cpf}`);
  }
}

class Morador extends Pessoa {
  constructor(nome, cpf, codigoAcesso) {
    super(nome, cpf);
    this.codigoAcesso = codigoAcesso;
  }
  mostrarDadosMorador() {
    super.mostrarDadosPessoa();
    console.log(`Código de Acesso: ${this.codigoAcesso}`);
  }
}

class Main {
  static main() {
    const edificio = new Edificio("Residencial Sol Nascente", "Rua das Flores, 123", "Centro", "São Paulo", "SP");
    edificio.mostrarDadosEdificio();
    console.log("-----");

    const moradores = [
      new Morador("Ana Silva", "123.456.789-00", "A1B2C3"),
      new Morador("Bruno Souza", "987.654.321-00", "D4E5F6")
    ];
    moradores.forEach(morador => morador.mostrarDadosMorador());
    console.log("-----");

    const apartamento = new Apartamento(101, edificio.nome, 1, "A", moradores.map(m => m.nome));
    apartamento.mostrarDadosApartamento();
    console.log("-----");

    const moradores2 = [
      new Morador("Bana Silva", "123.456.789-01", "B1B2C3"),
    ];
    moradores2.forEach(morador => morador.mostrarDadosMorador());
    console.log("-----");

    const apartamento2 = new Apartamento(102, edificio.nome, 1, "A", moradores2.map(m => m.nome));
    apartamento2.mostrarDadosApartamento();
    console.log("-----");

    const moradores3 = [
      new Morador("Cana Silva", "123.456.789-02", "C1B2C3"),
      new Morador("Cruno Souza", "987.654.321-02", "C4E5F6")

    ];
    moradores3.forEach(morador => morador.mostrarDadosMorador());
    console.log("-----");

    const apartamento3 = new Apartamento(103, edificio.nome, 1, "A", moradores3.map(m => m.nome));
    apartamento3.mostrarDadosApartamento();
    console.log("-----");

    const moradores4 = [
      new Morador("Dana Silva", "123.456.789-03", "D1B2C3"),
    ];
    moradores3.forEach(morador => morador.mostrarDadosMorador());
    console.log("-----");

    const apartamento4 = new Apartamento(104, edificio.nome, 1, "A", moradores4.map(m => m.nome));
    apartamento4.mostrarDadosApartamento();
    console.log("-----");

    const moradores5 = [
      new Morador("Eana Silva", "123.456.789-04", "E1B2C3"),
      new Morador("Eruno Souza", "987.654.321-04", "E4E5F6")

    ];
    moradores5.forEach(morador => morador.mostrarDadosMorador());
    console.log("-----");

    const apartamento5 = new Apartamento(105, edificio.nome, 1, "A", moradores5.map(m => m.nome));
    apartamento5.mostrarDadosApartamento();
    console.log("-----");


  }
}