import { AcompanhamentoMedicoItem } from "./AcompanhamentoMedicoItem.model"
import { DadoItemGrupoConfigFormulario } from "./DadoItemGrupoConfigFormulario.model"

export class AcompanhamentoMedicoDado {

    idAcompanhamentoMedicoDado: number
    valorDado: string
    tipoTransacao: string

    listaAcompanhamentoItem: AcompanhamentoMedicoItem[]
    listaAcompanhamentoItemExcluir: AcompanhamentoMedicoItem[]
    
    dadoItemGrupoConfigFormulario: DadoItemGrupoConfigFormulario

    constructor() {
        this.dadoItemGrupoConfigFormulario = new DadoItemGrupoConfigFormulario()
    }
}