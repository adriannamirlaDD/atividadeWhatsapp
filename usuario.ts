
    import {chats} from "./chats";

    export class usuario{
        private nome : string;
        private grupo : Array <chats>;

        public constructor(nome : string){
            this.nome = nome;
           
        }
        
        public getNome () : string {
            return this.nome;
        }
        
        public setNome (nome : string ) : void {
            this.nome = nome;
        }
        
        public getGrupo():chats []{
            return this.grupo;
        }
        public setGrupo( grupo : chats[] ): void {
            this.grupo = grupo;
    }
    }