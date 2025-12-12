import { Prestador } from "./Prestador.model";

export class Operadora {

    idOperadora: number;
    codOperadora: number;
    nomeOperadora: string;
    urlOperadora: string;
    logoOperadora: string;
    flgAppGestorLibCliente: number;   
    flagBloqueiaDiaAnterior: number;
    flagBloqueiaVisitaAcomp: number;
    flagGeraSenhaAleatoria: number;
    flgSelSenhaAcopmMedico: number;
	flgUtilzaMapaAcopmMedico: number;
	flagUtilizaOfflineAcompMedico: number;
	flagUtilizaSenhaAcompMedico: number;
    flagBloqueiaDiaPosteriorAlta: number;
    
    listaPrestadores: Prestador[];
}