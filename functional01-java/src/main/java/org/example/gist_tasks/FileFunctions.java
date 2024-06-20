package org.example.gist_tasks;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

public class FileFunctions {

    public static Optional<List<String>> readLinesFromFile(String filePath) {
        try {
            return Optional.of(Files.readAllLines(Paths.get(filePath)));
        } catch (IOException e) {
            return Optional.empty();
        }
    }

}
