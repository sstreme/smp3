import { Usuario } from './Usuario';
import { Cliente } from './Cliente';


export class Registro{
    usuario : Usuario;
    cliente : Cliente;
    nuevo: boolean;

    constructor(user,client,nuevo){
        this.usuario = user;
        this.cliente = client;
        this.nuevo=nuevo;
    }

    setCliente(client){
        this.cliente = {...client}
    }
}