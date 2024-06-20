package org.example.gist_tasks;

import org.apache.commons.lang3.tuple.Pair;
import org.example.gist_tasks.gist.GistConnector;
import org.example.gist_tasks.gist.GistInfo;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import static org.example.gist_tasks.AssessFunctions.assess;
import static org.example.gist_tasks.ListFunctions.partitionByDuplicated;
import static org.example.gist_tasks.StringFunctions.extractGistID;
import static org.example.gist_tasks.UrlFunctions.isURLOnline;
import static org.example.gist_tasks.PrintFunctions.*;

public class MainFunctions {

    public static void processFileLines(List<String> lines) {
        // function composition
        partitionByDuplicated
                .andThen(handleDuplicates)
                .andThen(checkOnlineUrls)
                .andThen(extractGistIdFromUrls)
                .andThen(retrieveGistInfo)
                .andThen(assessGistInfo)
                .apply(lines);
    }

    static Function<Pair<List<String>, List<String>>, List<String>> handleDuplicates = pair -> {
        handleList("Duplicated urls", pair.getRight());
        return pair.getLeft();  // return only unique urls
    };

    static Function<List<String>, List<String>> checkOnlineUrls = urls -> {
        Map<Boolean, List<String>> isOnlineUrls = urls.parallelStream()         // PARALLEL
                .collect(Collectors.partitioningBy(url -> isURLOnline(url)));

        handleList("Offline urls", isOnlineUrls.get(false));

        return isOnlineUrls.get(true);  // return online urls
    };

    static Function<List<String>, List<String>> extractGistIdFromUrls = urls -> {
        Map<Boolean, List<String>> hasGistID = urls.stream()
                .collect(Collectors.partitioningBy(
                        url -> !extractGistID(url).equals("INVALID"))
                );

        handleList("URL without GIST ID", hasGistID.get(false));

        return hasGistID.get(true);
    };

    static Function<List<String>, List<Pair<String, GistInfo>>> retrieveGistInfo = urls -> {
        GistConnector connector = new GistConnector();

        var urlGistInfoPairs = urls.parallelStream()                            // PARALLEL
                .map(url -> Pair.of(url, connector.retrieve(extractGistID(url))))
                .collect(Collectors.toList());

        var urlsWithoutInfo = urlGistInfoPairs.stream()
                .filter(pair -> pair.getRight().isEmpty())
                .map(pair -> pair.getLeft())
                .collect(Collectors.toList());

        handleList("URL without GIST Info", urlsWithoutInfo);

        return urlGistInfoPairs.stream()
                .filter(pair -> pair.getRight().isPresent())
                .map(pair -> Pair.of(pair.getLeft(), pair.getRight().get()))
                .collect(Collectors.toList());
    };

    static Function<List<Pair<String, GistInfo>>, Void> assessGistInfo = gistInfoPairs -> {
        // Assess each Gist Info
        var assessedUrls = gistInfoPairs.stream()
                .collect(Collectors.partitioningBy(pair -> assess(pair.getRight())));

        handleList(
                "URLs with GIST Info -> Incorrect",
                assessedUrls.get(false).stream().map(Pair::getLeft).toList()
        );
        handleList(
                "URLs with GIST Info -> Correct",
                assessedUrls.get(true).stream().map(Pair::getLeft).toList()
        );

        return null;
    };
}