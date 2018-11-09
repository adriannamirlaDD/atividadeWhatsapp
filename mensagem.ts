    import {usuario} from"./usuario";

    export class mensagem{

    private  emissor : usuario;
    private  texto : string;
    private leitores: Array<usuario>;
    private membro : string;

        public constructor(emissor : usuario , texto : string ) {
            this.emissor = emissor;
            this.texto = texto;
            this.leitores = [this.emissor];
        }
        public getEmissor():usuario {
        return this.emissor; 

        }
        
        public setEmissor(emissor:usuario) : void{
            this.emissor = emissor;
        }

        public gettext() : string{
            return this.texto;
        }

        public settext(texto : string) : void{
            this.texto = texto;
        }

        public getleitores(): Array<usuario>{
            return this.leitores;
        }

        public setleitores(leitores:Array<usuario>): void{
            this.leitores = leitores;
        } 

        public  buscarLeitor(nome : string ): usuario | undefined{
            for (let i of this.leitores){
                if (i.getNome() == nome){
                    return i;
                }
            }
        }

        


    }