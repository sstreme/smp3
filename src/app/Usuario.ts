export class Usuario{
    id: number;
    email: string;
    pass: string;
    nombre: string;
    telefono_fijo: string;
    telefono_movil: string;
    especialidad: string;
    razon: string;
    pais: string;
    estado: string;
    municipio: string;
    direccion: string;
    mensaje: string;

    constructor(){
        this.email="";
        this.pass="";
        this.nombre="";
        this.telefono_fijo="",
        this.telefono_movil="";
        this.especialidad="";
        this.razon="";
        this.pais="";
        this.estado="";
        this.municipio="";
        this.direccion="";
        this.mensaje="";
    }
}