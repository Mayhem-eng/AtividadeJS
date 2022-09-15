class Veiculo{
  
    #marca;
    #modelo;
    #quantidaderodas;
    #motorizacao;
    #flex;

    constructor(marca, modelo, quantidaderodas, motorizacao, flex){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#quantidaderodas = quantidaderodas;
        this.#motorizacao = motorizacao;
        this.#flex = Boolean(flex);
    }
  

    get marca(){
        return this.#marca;
    }

    set marca(marca){
        this.marca = marca;
    }

    get modelo(){
        return this.#modelo;
    }

    set modelo(modelo){
        this.#modelo = modelo;
    }

    get quantidaderodas(){
        return this.#quantidaderodas;
    }

    set quantidaderodas(quantidaderodas){
        this.#quantidaderodas = quantidaderodas;
    }

    get motorizacao(){
        return this.#motorizacao;
    }

    set motorizacao(motorizacao){
        this.#motorizacao = motorizacao;
    }

    get flex(){
        return this.#flex;
    }

    set flex(flex){
        this.#flex = Boolean(flex);

    }       
}