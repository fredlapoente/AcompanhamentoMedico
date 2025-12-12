import { Beneficiario } from './Beneficiario.model';
import { Operadora } from './Operadora.model';
import { Prestador } from './Prestador.model';

export class SenhaAutorizacao {

    senha: string
	numProrrogacao: number
	senhaPrincipal: string
	dataAutorizacao: string
	dataInternacao: string
	horaInternacao: string
	codPlano: string
	pdrInternacao: string;
	justificativaInternacao: string;
	origemSenha: string
	flgPrincipal: boolean
	diasInternacao: number
	listaItensAutorizados: []
	beneficiario: Beneficiario
    prestador: Prestador
	operadora: Operadora

	// opção de filtro de periodo
	dataAutorizacaoInicial: string
	dataAutorizacaoFinal: string

	// campo usado para buscar em lista de senha. Usado no front-end
	concatDadosSenhaFiltro: string
	   
    constructor(){
        this.prestador = new Prestador()
        this.beneficiario = new Beneficiario()
		this.operadora = new Operadora()
    }
}