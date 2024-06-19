package org.example.vavr;

import io.vavr.control.Try;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

public class Vavr1 {

    public static Try<List<String>> readLinesFromFile(String filePath) {
        return Try.of(() -> Files.readAllLines(Paths.get(filePath)));
    }

    public static void main(String args[]) {
        readLinesFromFile("./urls.txt")
                .onSuccess(urls -> System.out.println(urls));
    }
}
