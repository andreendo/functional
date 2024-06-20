package org.example.vavr;

import io.vavr.control.Try;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

public class TryVavr0 {

    public static Try<Integer> parseInt(String potentialInt) {
        return Try.of(() -> {
            return Integer.parseInt(potentialInt);
        });
    }

    public static void main(String args[]) {
        parseInt("123a")
                .onSuccess(num -> System.out.println("The integer is " + num))
                .onFailure(exception -> System.out.println(exception));

        var result = parseInt("32").getOrElse(-1);
        System.out.println(result);
    }
}
