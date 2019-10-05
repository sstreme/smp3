import { Usuario } from './Usuario';
import { Cliente } from './Cliente';


export class Registro{
    usuario : Usuario;
    cliente : Cliente;

    constructor(user,client){
        this.usuario = user;
        this.cliente = client;
    }

    setCliente(client){
        this.cliente = {...client}
    }
}