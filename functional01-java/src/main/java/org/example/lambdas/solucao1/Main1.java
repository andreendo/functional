package org.example.lambdas.solucao1;

import io.vavr.Function0;

import java.util.function.Consumer;

public class Main1 {

    public static void main(String[] args) {
        var lista1 = new ListaLigada1();
        lista1.adicionar("valor1");
        lista1.adicionar("valor2");
        lista1.adicionar("valor3");

//        lista1.paraCada(new IParaCada() {
//            @Override
//            public void acao(String valor) {
//                System.out.println(">> " + valor);
//            }
//        });

//        lista1.paraCada(valor -> {
//            System.out.println(">> " + valor);
//        });

        lista1.paraCada(valor -> System.out.println(">> " + valor));

    }

}
