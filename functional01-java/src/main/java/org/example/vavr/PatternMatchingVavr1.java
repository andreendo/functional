package org.example.vavr;

import io.vavr.Tuple;
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
    }
}
