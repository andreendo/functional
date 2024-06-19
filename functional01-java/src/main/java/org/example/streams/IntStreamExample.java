package org.example.streams;

import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class IntStreamExample {

    public static void main(String args[]) {
        // números pares de 0 até 100 [
        var l = IntStream.range(0, 100)
                .filter(x -> x % 2 == 0)
                .boxed()
                .collect(Collectors.toList());

        // 5 primeiros números múltiplos de 2 e 11
        IntStream.iterate(1, x -> x + 1)
                .filter(x -> x % 2 == 0 && x % 11 == 0)
                .limit(5)
                .boxed()
                .forEach(x -> System.out.println(x));
    }

}
