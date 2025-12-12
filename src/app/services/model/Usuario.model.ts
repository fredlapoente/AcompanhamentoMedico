import { Operadora } from "./Operadora.model";
import { ConfigFormulario } from "./ConfigFormulario.model";
import { DispositivoMovel } from "./DispositivoMovel.model";
import { AcompanhamentoMedico } from "./AcompanhamentoMedico.model";

export class Usuario{

    idUsuario: number;    
    login: string;
    senha: string;
    novaSenha: string;
	nome: string;
	email: string;
    nomeDepartamento: string;
    flgUsuarioValido: boolean;
    flgPermissaoAppGestor: number;
    operadora: Operadora;
    configFormulario: ConfigFormulario
    dispositivoMovel: DispositivoMovel
    listaConfigFormulario: ConfigFormulario[]
    listaAcompanhamentoRestaurar: AcompanhamentoMedico[]
    
    constructor() {
        this.operadora = new Operadora();
        this.configFormulario = new ConfigFormulario();
        this.dispositivoMovel = new DispositivoMovel();
        this.listaAcompanhamentoRestaurar = [];
    } 
}