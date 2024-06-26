package org.example.election;

public record Stats(
        long women,
        long men,
        double averageAge,
        String context
) {
}
