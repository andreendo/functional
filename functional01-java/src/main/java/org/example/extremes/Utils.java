package org.example.extremes;

import io.vavr.control.Either;

import static io.vavr.API.*;
import static io.vavr.Predicates.isNull;

import java.util.List;
import java.util.stream.IntStream;

public class Utils {

    /**
     *
     * @param v
     * @return left -> error message
     *         right -> extremes
     *
     * In VAVR, the result expression of Case is always run; to avoid calling unintended method,
     *  put the call within a lambda.
     */
    public static Either<String, Extremes> findExtremes(List<Integer> arr) {
        return Match(arr).of(
//                Case($(a -> a == null),     Either.left("array cannot be null")),
                Case($(isNull()), () -> Either.left("array cannot be null")),
                Case($(a -> a.isEmpty()), () -> Either.left("array empty")),
                Case($(), () -> Either.right(findExtremesFromValidArray(arr)))
        );
    }

    public static Extremes findExtremesFromValidArray(List<Integer> v) {
        return IntStream.range(0, v.size())
                .mapToObj(i -> new Extremes(v.get(i), i, v.get(i), i))
                .reduce(Utils::updateExtreme)
                .get();
    }

    public static Extremes updateExtreme(Extremes e1, Extremes e2) {
        return new Extremes(
                e2.smallest() < e1.smallest() ? e2.smallest() : e1.smallest(),
                e2.smallest() < e1.smallest() ? e2.smallestIndex() : e1.smallestIndex(),
                e2.greatest() > e1.greatest() ? e2.greatest() : e1.greatest(),
                e2.greatest() > e1.greatest() ? e2.greatestIndex() : e1.greatestIndex()
        );
    }
}
