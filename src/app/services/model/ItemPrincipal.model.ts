import { Operadora } from "./Operadora.model";

export class ItemPrincipal {

    codItem: string
	desItem: string
	tipoItem: string
	concatCodDesItem: string;
    concatCodDesItemRed: string;
	
	operadora: Operadora

	concatDadosItemFiltro: string

    constructor() {
		this.operadora = new Operadora()		
	}
}