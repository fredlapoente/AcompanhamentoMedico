import { AcompanhamentoMedicoDado } from "./AcompanhamentoMedicoDado.model"

export class AcompanhamentoMedicoDia {

    idAcompanhamentoDia: number
    diaAcompanhamento: string
    diaSemanaAcompanhamento: string
    resumoDia: string
    dataCheckIn: string
    dataCheckOut: string
    statusSincronismo: string
    latitude: string
	longitude: string
    latitudeCheckOut: string
	longitudeCheckOut: string
	desErroLocalizacao: string
    protocoloSincronismo: number
    erroSincronismo: string
    tipoTransacao: string
    dataSincronizado: string 
               
    listaAcompanhamentoDado: AcompanhamentoMedicoDado[]

    //Campos auxiliares para tratamentos de tela
    flgSincronizar: boolean
    flgExibeSucessoProcesso: boolean
    flgExibeErroProcesso: boolean

    constructor(){
        this.dataSincronizado = ''
        this.erroSincronismo = ''
        this.flgSincronizar = false
        this.flgExibeSucessoProcesso = false
        this.flgExibeErroProcesso = false      
    }
}