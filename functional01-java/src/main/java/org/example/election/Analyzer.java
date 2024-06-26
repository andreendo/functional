package org.example.election;

import io.vavr.control.Either;
import static io.vavr.API.*;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Analyzer {

    public static Either<String, Stats> analyse(List<Candidate> candidates) {
        return Match(candidates).of(
                Case($(c -> c == null || c.isEmpty()), () -> Either.left("List null or empty")),
                Case($(), () -> Either.right(obtainStats(candidates)))
        );
    }

    public static Stats obtainStats(List<Candidate> candidates) {
        Map<Character, Long> genreCounts = candidates.stream()
                .collect( Collectors.groupingBy(Candidate::genre, Collectors.counting()) );

        return new Stats(
                genreCounts.getOrDefault('F', 0L),  // women
                genreCounts.getOrDefault('M', 0L),    // men
                candidates.stream().mapToInt(Candidate::age).average().orElse(0.0), // avg age
                defineContext(candidates.size())    //context
        );
    }

    /**
     *
     * @param candidates
     * @return
     *
     * This version has a performance overhead of traverse twice the list to count the candidates per genre
     */
    public static Stats obtainStatsV1(List<Candidate> candidates) {
        return new Stats(
                candidates.stream().filter(c -> c.genre() == 'F').count(),  // women
                candidates.stream().filter(c -> c.genre() == 'M').count(),    // men
                candidates.stream().mapToInt(Candidate::age).average().orElse(0.0), // avg age
                defineContext(candidates.size())    //context
        );
    }

    public static String defineContext(int numberOfCandidates) {
        return Match(numberOfCandidates).of(
                Case($(1), "no adversaries"),
                Case($(2), "polarized"),
                Case($(), "normal")
        );
    }
}