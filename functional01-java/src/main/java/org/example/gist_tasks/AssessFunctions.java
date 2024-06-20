package org.example.gist_tasks;

import org.example.gist_tasks.gist.GistInfo;

import java.util.Arrays;

import static org.example.gist_tasks.StringFunctions.countWords;

public class AssessFunctions {
    public static Boolean assess(GistInfo gistInfo) {
        if (gistInfo.numberOfFiles() != 1)
            return false;

        var keywords = Arrays.asList("MontanhaRussaControlador", "assertThrows", ".ehCliente");

        var words = countWords(gistInfo.fileContents().get(0), keywords);
        return words.get("MontanhaRussaControlador") >= 1 &&
                words.get("assertThrows") >= 1 &&
                words.get(".ehCliente") >= 1;
    }
}