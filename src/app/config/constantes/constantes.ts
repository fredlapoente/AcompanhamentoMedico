export default class Constantes {

    static LIMIT_PER_PAGE: number = 50;
    static SCROLL_TIME: number = 1200; // em milisegundos

    //Constantes tabela de domínio
    static TABELA_MOTIVO_ALTA = 'M003'
    static TABELA_POSOLOGIA = 'M001'
    static TABELA_TIPO_ACOMODACAO = 'M002'
    static TABELA_TIPO_INTERNACAO = 'T012'
    static TABELA_CARATER_ATENDIMENTO = 'T001'
    static TABELA_ORIGEM_INTERNACAO = 'M004'
    static TABELA_CID = 'C001'

    //Constantes STATUS
    static STATUS_ABERTO = "ABERTO"
    static STATUS_ENCERRADO = "ENCERRADO"
    static STATUS_PENDENTE = "PENDENTE"
    static STATUS_SINCRONIZADO = "SINCRONIZADO"
    static STATUS_RESTAURADO = "RESTAURADO"
    static STATUS_ERRO_SINCRONIZACAO = "ERRO SINCRONIZACAO"
    
    //Constantes Tipo de Transação
    static TIPO_TRANSACAO_INSERIR = "INSERIR"
    static TIPO_TRANSACAO_ALTERAR = "ALTERAR"
    static TIPO_TRANSACAO_EXCLUIR = "EXCLUIR"

    //Constantes dos nomes das "TABELAS" para armazenamento das informações OFFLINE
    static STORAGE_OPERADORA = 'storage_operadora'
    static STORAGE_USUARIO = 'storage_usuario'
    static STORAGE_ITENS_PRINCIPAIS = 'storage_itens_principais'
    static STORAGE_TIPO_ACOMODACAO = 'storage_tipo_acomodacao'
    static STORAGE_TIPO_INTERNACAO = 'storage_tipo_internacao'
    static STORAGE_CARATER_ATENDIMENTO = 'storage_carater_atendimento'
    static STORAGE_ORIGEM_INTERNACAO = 'storage_origem_internacao'
    static STORAGE_MOTIVO_SAIDA = 'storage_motivo_saida'
    static STORAGE_UF = 'storage_uf'
    static STORAGE_POSOLOGIA = 'storage_posologia'
    static STORAGE_ACOMPANHAMENTO_MEDICO = 'storage_acompanhamento_medico'

    //perfil do formulario
    static PERFIL_DOMICILIAR = '2';
    static PERFIL_ACOMPANHAMENTO_MEDICO = '1';

    //Constantes aplicação sincronismo
    static LIMITE_ACOMPANHAMENTOS_SINCRONIZAR = 10

    //Constante para controlar com quantos dias o acompanhamento encerrado deve ser apagado automaticamente
    static QTD_DIAS_APAGAR_ENCERRADO = 15
}