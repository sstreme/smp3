import { Cliente } from './Cliente';
import { Usuario } from './Usuario';

export class Respuesta{
    mensaje: string;
    cliente: Cliente;
    usuario: Usuario;
    token: string;
}