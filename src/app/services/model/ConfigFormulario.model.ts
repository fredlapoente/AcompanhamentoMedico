import { GrupoConfigFormulario } from "./GrupoConfigFormulario.model";

export class ConfigFormulario{

	idConfigFormulario: number;
	nomeConfigFormulario: string;	
	versaoConfigFormulario: number;
	statusAtualConfigFormulario: string;
	datAtivadoDesativadoConfigFormulario: string;
	flgVerificado: boolean;
	idDominio: number;
	codDominio: string;
	
	listaGrupoConfigFormulario: GrupoConfigFormulario[];
}