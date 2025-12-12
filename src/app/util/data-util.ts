import * as moment from 'moment';

export class DataUtil {
    constructor() {
        moment.locale('pt-br');
    }
    static retornarQtdDiasEntreDatas(dataDe, dataAte) {
        const now = moment(dataDe)
        const past = moment(dataAte)
        const duration = moment.duration(past.diff(now))

        const days = duration.asDays()
        return days
    }

    static retornarQtdMesesEntreDatas(dataDe, dataAte) {
        const de = moment(dataDe, "MM/YYYY")
        const ate = moment(dataAte, "MM/YYYY")
        const months = ate.diff(de, "months")
        return months
    }

    static retornarQtdAnosEntreDatas(dataDe, dataAte) {
        const now = moment(dataDe)
        const past = moment(dataAte)
        const duration = moment.duration(past.diff(now))

        const years = duration.asYears()
        return years
    }
    
}