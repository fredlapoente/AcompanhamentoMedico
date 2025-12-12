import { AcompanhamentoMedicoDia } from "./AcompanhamentoMedicoDia.model";
import { AcompanhamentoMedicoObs } from "./AcompanhamentoMedicoObs.model";
import { Beneficiario } from "./Beneficiario.model";
import { ConfigFormulario } from "./ConfigFormulario.model";
import { DispositivoMovel } from "./DispositivoMovel.model";
import { DominioCodigo } from "./DominioCodigo.model";
import { Operadora } from "./Operadora.model";
import { Prestador } from "./Prestador.model";
import { SenhaAutorizacao } from "./SenhaAutorizacao.model";
import { Usuario } from "./Usuario.model";

export class AcompanhamentoMedico {

    idAcompanhamento: number
	diagnosticoInternacao: string
    dataAbertura: string
	dataInternacao: string
    horaInternacao: string
    dataAlta: string
	dataEncerramento: string
    dataEstimadaAlta: string
	obsEncerramento: string
	origemTransacao: string
    medicoAssistente: string
    crmMedicoAssistente: number
	versao: number
    status: string
    statusSincronismo: string
    erroSincronismo: string    
    protocoloSincronismo: number
    tipoTransacao: string
    dataSincronizado: string 
    dataPendencia: string
    appVersion: string
    
    tipoAcomodacao: DominioCodigo
    tipoInternacao: DominioCodigo
    caraterAtendimento: DominioCodigo
    origemInternacao: DominioCodigo
    cidDiagnostico: DominioCodigo
    motivoAlta: DominioCodigo
    usuario: Usuario
    operadora: Operadora
    beneficiario: Beneficiario
    prestador: Prestador
    senhaAutorizacao: SenhaAutorizacao
    configFormulario: ConfigFormulario
    dispositivoMovel: DispositivoMovel
    ultimaInternacao: SenhaAutorizacao

    listaAcompanhamentoDia: AcompanhamentoMedicoDia[]
    listaAcompanhamentoObs: AcompanhamentoMedicoObs[]

    //Campos auxiliares para tratamentos de tela
    concatDadosAcompanhamentoFiltro: string
    exibeDadosSincronismo: boolean
    flgExibeGifProcessando: boolean
    flgExibeSucessoProcesso: boolean
    flgExibeErroProcesso: boolean
    flgSincronizar: boolean
    flgEmailEnviado: boolean
    flgPendenciaVerificada: boolean
    erroAnexoAcompanhamento: string
    flgImportar : boolean
    flgPossuiFormulario : boolean
    flgExisteDispositivo : boolean
    flgImportadoSucesso: boolean
    dataUltimaVisualizacao: string
       
    constructor(){
        this.tipoAcomodacao = new DominioCodigo
        this.tipoInternacao = new DominioCodigo
        this.caraterAtendimento = new DominioCodigo
        this.origemInternacao = new DominioCodigo
        this.medicoAssistente = ''
        this.crmMedicoAssistente = null
        this.cidDiagnostico = new DominioCodigo
        this.dataEstimadaAlta = ''
        this.usuario = new Usuario()
        this.operadora = new Operadora()
        this.beneficiario = new Beneficiario()
        this.prestador = new Prestador()
        this.senhaAutorizacao = new SenhaAutorizacao()
        this.motivoAlta = new DominioCodigo()
        this.configFormulario = new ConfigFormulario()
        this.dispositivoMovel = new DispositivoMovel()
        this.ultimaInternacao = new SenhaAutorizacao()
        this.erroSincronismo = ''
        this.dataSincronizado = ''
        this.listaAcompanhamentoDia = []
        this.listaAcompanhamentoObs = []

        this.exibeDadosSincronismo = false
        this.flgSincronizar = false
        this.flgExibeGifProcessando = false
        this.flgExibeSucessoProcesso = false
        this.flgExibeErroProcesso = false
        this.erroAnexoAcompanhamento = ""

        this.flgImportar = false
        this.flgPossuiFormulario = true
        this.flgExisteDispositivo = false
        this.flgImportadoSucesso = false
        
        this.dataUltimaVisualizacao = ''
        this.appVersion = ''
    }
}