import { Operadora } from "./Operadora.model";

export class DominioCodigo {

	seqDominio: number;
	codTabela: string;
	codDominio: string;
	desDominio: string;

	operadora: Operadora;
	
	constructor() {		
		this.operadora = new Operadora()			
	}
}