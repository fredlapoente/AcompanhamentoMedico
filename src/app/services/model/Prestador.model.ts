import { Operadora } from './Operadora.model';
import { Usuario } from './Usuario.model';
import { DominioCodigo } from './DominioCodigo.model';

export class Prestador {

	idPrestador: number;
	codPrestador: string;
	nomePrestador: string;
	codNomePrestador: string;
	concatCodNomePrestador: string;
	latitude: number;
	longitude: number;	
	uf: DominioCodigo;
	operadora: Operadora
	usuario: Usuario

	constructor() {
		this.usuario = new Usuario()
		this.operadora = new Operadora()
		this.uf = new DominioCodigo()
	}
}