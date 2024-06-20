package org.example.lambdas;

public class ListaLigada {

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
}
