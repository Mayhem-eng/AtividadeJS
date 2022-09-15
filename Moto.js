class Moto extends Veiculo{
    constructor(marca, modelo, quantidaderodas, motorizacao, flex){

        super(marca, modelo, quantidaderodas, motorizacao, Boolean(flex));
    
      
        this.ligada;
        this.fatorInjecao = 0.0;
        this.dirigindo = false;

    }

    get estaLigada(){
        return this.ligado;
    }

    set estaLigada(ligado){
        this.ligada = Boolean(ligado);
    }

    dirigirMoto(){
        
        if(this.ligada){
            this.dirigindo = true;
            this.fatorInjecao = 2.5;
            return console.log("Moto em movimento");
        }
        return console.log("A moto não está ligada");
    }

    velocidade(){
        if(this.dirigindo){
           console.log(this.fatorInjecao + "km/s" );
        }
    }

    acelerar(seg_acelerar){

        if(this.dirigindo){
            if(this.fatorInjecao <= 2.5){
                this.fatorInjecao = Math.round(this.fatorInjecao + (seg_acelerar * 10.0));
            }
            return console.log(fatorInjecao);
        }
        else{
            return console.log("Moto nao esta em movimento");
            
        }
    }

    frear(seg_frear){
        if(this.dirigindo){
            // a moto deve estar acima de 0.5km/s para freiar senão a mesma desliga
            if(this.fatorInjecao >= 0.5){
                this.fatorInjecao = Math.round(this.fatorInjecao - (seg_frear * 2.0));
            }
            if(this.fatorInjecao > (this.fatorInjecao - seg_frear * 2.0)){
                /*Caso a velocidade atual seja maior que o tempo segurando
                o freio vezes 2.0, a moto automaticamente desliga.
                */
                this.ligada = false;
                this.fatorInjecao = 0.0;
            }
            return console.log(fatorInjecao);

        }
        else{
            console.log("Se frear mais a moto ira desligar");
        }
    }

    status_geral(){
        console.log("Marca: " + this.Definirmarca());
        console.log("Modelo: " + this.DefinirModeloo());
        console.log("Total de rodas: " + this.QuantidadeRodas());
        console.log("Motorizacao: " + this.Motorizacao());
        console.log("Marca: " + this.TemFlex());
        console.log("Em movimento: " + this.dirigindo);
        console.log("Velocidade atual: " + this.fatorInjecao + "km/s");
    }

}