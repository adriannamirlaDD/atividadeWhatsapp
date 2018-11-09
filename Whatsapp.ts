    import {usuario} from "./usuario";
    import {chats} from "./chats";
    import {mensagem} from "./mensagem";

    export class Whatsapp {
        
        private usuario = Array<usuario>();
        private chat = Array<chats>();
        private membro : string;

    public constructor (usuario : usuario[], chat :chats []){
        this.usuario = usuario ;
        this.chat = chat;
    }


    public addUsuario(nome:string):boolean{
        if(this.buscaUsuario(nome)!= undefined){
        
            return false;
        }else{
            this.usuario.push(new usuario (nome));
            return true;
        }
    }

    public buscaUsuario(nome:string):usuario|undefined{
        for (let i of this.usuario){
            if (i.getNome()==nome){
                return i;
            }
        }
        return undefined;
    }

    public buscaGrupo(nome:string):chats|undefined{
        for(let i of this.chat){
            if (i.getNome()==nome){
                return i;
            }
        
        
        }
        return undefined;

    }
    public addGrupo(nome:string):boolean{
        if(this.buscaGrupo(nome)!=undefined){
            return false;
        }else{
            this.chat.push(new chats(nome));
            return true;
        }    
    }
    public addUsuarioGrupo(adm:string,membro:string, grupo:string) : number{
        let a: usuario = this.buscaUsuario(adm);
        let m: usuario = this.buscaUsuario(membro);
        let g: chats = this.buscaGrupo(grupo);
        if(a== undefined){
            return 1; //adm nao existe

        }else if(m == undefined){
            return 2; //pessoa nao existe
        }else if(g==undefined){
            return 3; //grupo nao existe
        }else if (g.buscaUsuario(membro) != undefined){
            return 4; //Pessoa nao existe no grupo
        }else if (g.buscaUsuario(adm)==undefined){
            return 5;//admin nao esta no grupo
        }
    else{
        g.getUsuario().push(m);
        m.getGrupo().push(g);
        return 0; //com sucesso
    }
    }

        public enviarMensagem(texto : string, membro : string ,grupo : string) : number{
        let m:usuario = this.buscaUsuario(membro);
        let g:chats = this.buscaGrupo(grupo);
        if (m==undefined){
            return 1;//pessoa n existe
        }else if(g==undefined){
            return 2;//grupo nao existe
        }else if (g.buscaUsuario(membro)==undefined){
            return 3;//pessoa n esta no grupo
        }else{
            g.getMensagem().push(new mensagem ( m, texto));
            return 0;//mesangem enviada
        }
    } 

        public buscarMensagensNovas (pessoa : string, grupo : string) : mensagem[] {
            let p: usuario = this.buscaUsuario(pessoa);
            let g: chats = this.buscaGrupo(grupo);
            let res : mensagem[] = [];
            if(p== undefined){
        console.log("pessoa nao existe");
    }   
            else if(g==undefined){
            console.log("grupo nao existe");
    }   
        else if (g.buscaUsuario(pessoa) == undefined){
            console.log("Pessoa nao esta no grupo");
    }   else{
            for (let m of g.getMensagem()){
            if (m.buscarLeitor(pessoa) == undefined) {
            res.push(m);
            m.getleitores().push(p);
        }
    }

    return res;
    }
        }
    }
