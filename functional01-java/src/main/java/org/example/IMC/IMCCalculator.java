package org.example.IMC;

import io.vavr.Tuple;
import io.vavr.control.Either;
import static io.vavr.API.*;

public class IMCCalculator {

    public static Either<String, IMCStatus> classifyPerson(Person person) {
        return calculateIMC(person.height(), person.weight())
                .map(imc -> new IMCStatus(imc, classifyIMC(imc)));
    }

    static Either<String, Double> calculateIMC(double height, double weight) {
        return Match(Tuple.of(height, weight)).of(
                Case($(t -> t._1 <= 0), () -> Either.left("Invalid height")),
                Case($(t -> t._2 <= 0), () -> Either.left("Invalid weight")),
                Case($(), () -> Either.right(weight / (height * height)))
        );
    }

    static String classifyIMC(double imc) {
        return Match(imc).of(
                Case($(v -> v < 18.5), "below"),
                Case($(v -> v < 25), "normal"),
                Case($(v -> v < 30), "above"),
                Case($(), "obese")
        );
    }

}
