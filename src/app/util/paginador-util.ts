export class PaginadorUtil {

    static getPaginador({ paginaCorrente, tamanhoPagina, tamanhoLista }: { paginaCorrente: number; tamanhoPagina: number; tamanhoLista: number; }) {
        // calculando o total de paginas
        let totalPaginas = Math.ceil(tamanhoLista / tamanhoPagina)
        let paginaInicial: number
        let paginaFinal: number

        if (totalPaginas <= 6) {
            // Se tiver menos de 6 páginas totais para mostrar tudo
            paginaInicial = 1;
            paginaFinal = totalPaginas;
        } else {
            // Se tiver mais de 6 páginas totais, calcular as páginas inicial e final
            if (paginaCorrente <= 4) {
                paginaInicial = 1;
                paginaFinal = 6;
            } else if (paginaCorrente + 2 >= totalPaginas) {
                paginaInicial = totalPaginas - 5;
                paginaFinal = totalPaginas;
            } else {
                paginaInicial = paginaCorrente - 3;
                paginaFinal = paginaCorrente + 2;
            }
        }
        // Cálculo de índices de itens iniciais e finais
        let startIndex = (paginaCorrente - 1) * tamanhoPagina;
        let endIndex = Math.min(startIndex + tamanhoPagina - 1, tamanhoLista - 1);
        //Se o indice inicial for maior que o indice final recalcula o indice inicial
        if(startIndex > endIndex){
            if(Math.sign(startIndex - tamanhoPagina) == -1){                
                startIndex = 0
            }else{                
                startIndex = startIndex - tamanhoPagina
           }           
        }

        // Criar um array de páginas para o ng-repeat no componente
        let paginas = [];
        for (var i = paginaInicial; i < paginaFinal + 1; i++) {
            paginas.push(i);
        }

        // Retornar objeto com todas as propriedades exigidas para exibição
        return {
        totalItems: tamanhoLista,
        paginaCorrente: paginaCorrente,
        tamanhoPagina: tamanhoPagina,
        totalPaginas: totalPaginas,
        paginaInicial: paginaInicial,
        paginaFinal: paginaFinal,
        indiceInicial: startIndex,
        indiceFinal: endIndex,
        paginas: paginas,
        };
    }
}    