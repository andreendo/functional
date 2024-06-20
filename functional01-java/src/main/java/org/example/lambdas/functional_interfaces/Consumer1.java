package org.example.lambdas.functional_interfaces;

import java.util.Arrays;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class Consumer1 {

    public static void main(String[] args) {
        var nums = Arrays.asList(1, 2, 3, -4, 5, 6);

        Consumer<Integer> printNumber = number -> System.out.println("Num: " + number);

        nums.forEach(printNumber);
    }
}
