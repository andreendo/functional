package org.example;

import static org.example.FileFunctions.*;

/**
 * Dado uma lista de urls para gists em um arquivo
 * - remover os duplicados (lista separada)
 * - checar as urls existem (lista inexistentes)
 * - verificar a quantidade de arquivos no gist
 * - contar ocorrências de keywords
 */

public class Main {
    public static void main(String[] args) {
        var initTime = System.currentTimeMillis();

        readLinesFromFile("./urls.txt").ifPresentOrElse(
                MainFunctions::processFileLines,
                PrintFunctions::errorReadingFile
        );

        System.out.println("Runtime (in ms): " + (System.currentTimeMillis() - initTime));
    }
}

/*
        // How to handle an optional
        GistConnector gistConn = new GistConnector();
        gistConn.retrieve("46d237a52b41f23b764afd3a2091af14")
                .ifPresentOrElse(
                        gistInfo -> System.out.println(gistInfo),
                        () -> System.out.println("Error retrieving the Gist data")
                );
*/