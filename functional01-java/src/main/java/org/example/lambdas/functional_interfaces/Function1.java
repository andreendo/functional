package org.example.lambdas.functional_interfaces;

import java.util.Arrays;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Function1 {

    public static void main(String[] args) {
        var nums = Arrays.asList(1, 2, 3, -4, 5, 6);

        // T - Integer -> param
        // R - String -> return
        Function<Integer, String> toString = number -> "Num: " + number;

        var res = nums.stream().map(toString).collect(Collectors.toList());
        System.out.println(res);
    }
}
