    import {mensagem} from"./mensagem";
    import {usuario} from "./usuario";

    export class chats{
    
    
        private nome : string;
        private usuario : Array <usuario>;
        private mensagem : Array <mensagem>;

        public constructor (nome : string, usuario : Array <usuario> = [], mensagem : Array <mensagem> = []){
            this.nome = nome;
            this.mensagem = mensagem;
            this.usuario = usuario;
        }

        public getNome () : string{
            return this.nome;
        }

        public setNome ( nome : string) : void {
            this.nome = nome;
        }

        public getUsuario () : usuario[] {
        return this.usuario ;
        }

        public setUsuario (usuario : usuario []) : void {
            this.usuario = usuario;
        } 

        public getMensagem () : mensagem [] {
            return this.mensagem;
        }

        public setMensagem(mensagem : mensagem []) : void{
            this.mensagem = mensagem;
        } 

    public buscaLeitor(nome:string):usuario|undefined{
    for (let i of this.usuario){
        if (i.getNome()==nome){
            return i;
        }
    }
    return undefined;
    }


    public buscaUsuario(pessoa: string): usuario | undefined {
        for (let i of this.usuario){
            if (i.getNome()==pessoa){
                return i;
            }
        }
        return undefined;
    }

    }