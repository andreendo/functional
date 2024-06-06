package org.example;

import org.apache.commons.lang3.tuple.Pair;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class ListFunctions {

    public static Function<List<String>, Pair<List<String>, List<String>>> partitionByDuplicated = urls -> {
        // use a frequency map
        Map<String, Long> frequencyMap = urls.stream()
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

        var unique = frequencyMap.entrySet().stream()
                .filter(entry -> entry.getValue() == 1) // urls that appeared once
                .map(entry -> entry.getKey())      // just the strings
//                .map(Map.Entry::getKey)
                .toList();

        var duplicate = frequencyMap.entrySet().stream()
                .filter(entry -> entry.getValue() > 1)
                .flatMap(entry -> Collections.nCopies(entry.getValue().intValue(), entry.getKey()).stream())
                .toList();

        return Pair.of(unique, duplicate);
    };

}