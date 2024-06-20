package org.example.lambdas.solucao1;

import org.example.lambdas.No;

public class ListaLigada1 {

    private No inicio = null;
    private No atual = null;

    public void adicionar(String novoValor) {
        if (inicio == null) {
            inicio = new No(novoValor);
            atual = inicio;
        } else {
            var novoNo = new No(novoValor);
            atual.setProximo(novoNo);
            atual = novoNo;
        }
    }

    // Implementar um método paraCada que faz uma ação para cada valor na lista
    public void paraCada(IParaCada iParaCada) {
        var no = inicio;
        while (no != null) {
            iParaCada.acao(no.valor);
            no = no.getProximo();
        }
    }
}
