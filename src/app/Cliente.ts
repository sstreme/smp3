export class Cliente{
    IDCliente: number;
    cliente: string;
    contacto: string;
    pais: string;
    estado: string;
    ciudad: string;
    direccion: string;
    telefono: string;
    email: string;

    constructor(){
        this.cliente="";
        this.contacto="";
        this.pais="";
        this.estado="";
        this.ciudad="";
        this.direccion="";
        this.telefono="";
        this.email="";
    }
}