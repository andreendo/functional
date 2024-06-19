package org.example.stream;

import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class StreamExample1 {
    public static void main(String[] args) {

        List<String> names = Arrays.asList("name 1", "name 2", "name 3");
        names.stream()
                .peek(name -> System.out.println(name))
                .collect(Collectors.toList());

        names.stream()
                .filter(name -> name.indexOf("2") != -1)
                .findFirst();

        var random = new Random();
        var fiveRandomNumbers = random.ints()
                .limit(5)
                .boxed()
                .collect(Collectors.toList());
        System.out.println(fiveRandomNumbers);
    }
}
