class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      throw new Error("O método atacar deve ser implementado pela classe filha");
    }
  }
  
  class Mago extends Heroi {
    atacar() {
      console.log(`o ${this.tipo} ${this.nome} atacou usando magia`);
    }
  }
  
  class Guerreiro extends Heroi {
    atacar() {
      console.log(`o ${this.tipo} ${this.nome} atacou usando espada`);
    }
  }
  
  class Monge extends Heroi {
    atacar() {
      console.log(`o ${this.tipo} ${this.nome} atacou usando artes marciais`);
    }
  }
  
  class Ninja extends Heroi {
    atacar() {
      console.log(`o ${this.tipo} ${this.nome} atacou usando shuriken`);
    }
  }
  
  // Exemplo de uso
  
  const mago = new Mago("Merlin", 500, "mago");
  mago.atacar();
  
  const guerreiro = new Guerreiro("Arthur", 30, "guerreiro");
  guerreiro.atacar();
  
  const monge = new Monge("Li", 25, "monge");
  monge.atacar();
  
  const ninja = new Ninja("Kira", 20, "ninja");
  ninja.atacar();
  