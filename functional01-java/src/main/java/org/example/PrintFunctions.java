package org.example;

import java.util.List;

public class PrintFunctions {
    public static void handleList(String type, List<String> items) {
        System.out.println("---------------");
        System.out.println(">> " + type);
        System.out.println("# " + items.size());
        System.out.println("---------------");
        items.forEach(System.out::println);
        System.out.println("---------------");
        System.out.println();
    }

    public static void errorReadingFile() {
        System.out.println("Error reading the file");
    }
}
