export class Usuario{
    id: number;
    email: string;
    pass: string;
    token: string;
    verified: boolean;
    clientes_IDCliente: number;

    constructor(){
        this.email="";
        this.pass="";
        this.token="";
        this.verified=false;
    }
}