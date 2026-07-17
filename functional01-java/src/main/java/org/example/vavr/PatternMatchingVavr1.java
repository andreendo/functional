package org.example.vavr;

import io.vavr.Tuple;
import io.vavr.Tuple2;
import io.vavr.control.Either;

import static io.vavr.API.*;

public class PatternMatchingVavr1 {

    /**
     *
     * @param user
     * @param password
     * @return Either - Left - Error Message
     *                  Right - token
     */
    static Either<String, String> authenticate(String user, String password) {
        return Match(Tuple.of(user, password)).of(
                Case($(t -> !t._1.equals("admin")), Either.left("invalid user")),
                Case($(t -> !t._2.equals("pass")), Either.left("invalid password")),
                Case($(), Either.right("your token here"))
        );
    }

    // Usando Pattern Matching for Switch - Java >= 21
    static Either<String, String> authenticateV2(String user, String password) {
        return switch (new Credentials(user, password)) {
            case Credentials(var u, var p) when !u.equals("admin") -> Either.left("invalid user");
            case Credentials(var u, var p) when !p.equals("pass") -> Either.left("invalid password");
            default -> Either.right("your token here");
        };
    }

    static Either<String, String> authenticateV0(String user, String password) {
        if (! user.equals("admin"))
            return Either.left("invalid user");

        if (! password.equals("pass"))
            return Either.left("invalid password");

        return Either.right("your token here");
    }

    public static void main(String args[]) {
        authenticate("admin", "pass")
                .peek(token -> System.out.println("Token: " + token))
                .peekLeft(error -> System.out.println("Error message: " + error));

        // pegar um valor do mesmo tipo right
        String res = authenticate("adminaa", "pass")
                .getOrElseGet(s -> "-1"); // lambda converte o tipo Left no tipo Right
        System.out.println(res);

        // pegar um valor, c.c. lançar uma exceção
        var res2 = authenticate("admin", "pass22")
                .getOrElseThrow(error -> new RuntimeException("Authentication failed: " + error));
        System.out.println(res2);

        //
    }
}
