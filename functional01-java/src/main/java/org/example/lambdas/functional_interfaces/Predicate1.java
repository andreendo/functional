package org.example.lambdas.functional_interfaces;

import java.util.Arrays;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class Predicate1 {

    public static void main(String[] args) {
        var nums = Arrays.asList(1, 2, 3, -4, 5, 6);

        Predicate<Integer> positivo = (num -> num >= 0);
        Predicate<Integer> par = (num -> num % 2 == 0);

        var res = nums.stream()
                .filter(positivo.and(par))
                .collect(Collectors.toList());

        System.out.println(res);
    }
}
