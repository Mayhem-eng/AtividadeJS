
class Carro extends Veiculo{
        constructor(marca, modelo, quantidaderodas, motorizacao, flex){
         

        //super(this.Definemarca, this.Definemodelo, this.Quantidaderodas, this.DefineMotorizacao, this.TemFlex);

    
            super(marca, modelo, quantidaderodas, motorizacao, Boolean(flex));

        

            this.ligado;
            this.portas;
            this.marcha = 0;
            this.dirigindo = false;

        }

        get PortasFechadas(){
            return this.portas;
        }

        set PortasFechadas(portas){
            this.portas = Boolean(portas);
        }

        get estaLigado(){
            return this.ligado;
        }

        set estaLigado(ligado){
            this.ligado = Boolean(ligado);
        }

        alterar_marcha(marcha) {
            this.marcha = marcha;

            if(this.dirigindo) {
                this.marcha = marcha;
                switch (this.marcha) {
                    case 1:
                        console.log("Marcha 1 ( 0-46kg )");
                        break;
                    case 2:
                        console.log("Marcha 2 ( 47-83kg )");
                        break;
                    case 3:
                        console.log("Marcha 3 ( 84-122kg )");
                        break;
                    case 4:
                        console.log("Marcha 4 ( 123-166kg )");
                        break;
                    default:
                        console.log("Marcha invalida");
                        break;
                }
            }

            else{
                    console.log("Carro nao esta em movimento");
                }
        }

        ligar (){
            if(this.ligado && !this.portas){
                this.dirigindo = true;
                return console.log("Carro ligado");
            }
            return console.log("Carro não pode ligar");
        }

        frear(){
            if(this.dirigindo){
                this.dirigindo = false;
                return console.log("Carro parado");
            }
             return console.log("O carro já está parado");
        }

        velocidade(){
            if(dirigindo){
                console.log("Marcha atual: " + this.marcha);
            }
        }

        statusGeral(){
            console.log("Marca: " + this.Definirmarca());
            console.log("Modelo: " + this.DefinirModelo());
            console.log("Quantidade de rodas: " + this.Quantidaderodas());
            console.log("Motorização: " + this.DefinirMotorizacao());
            console.log("Flex: " + this.TemFlex());
            console.log("Em movimento: " + this.dirigindo());
            System.out.printf("Marcha atual: " + this.marcha());

        }
}
