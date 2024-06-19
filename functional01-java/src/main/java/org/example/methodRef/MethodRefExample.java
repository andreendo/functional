package org.example.methodRef;

import java.util.Arrays;
import java.util.List;

public class MethodRefExample {

    public static void main(String[] args) {
        List<String> names = Arrays.asList("Chuck Norris", "Mary Jane", "Jean Pierre");

        // Versão 1
        for(String name : names) { System.out.println(name); }

        // Versão 2
        names.forEach(name -> System.out.println(name));

        // Versão 3
        names.forEach(System.out::println);
    }


}
