package org.example.lambdas;

public class No {
    public No proximo = null;
    public String valor;

    public No(String valor) {
        this.valor = valor;
    }

    public No getProximo() {
        return proximo;
    }

    public void setProximo(No proximo) {
        this.proximo = proximo;
    }
}
