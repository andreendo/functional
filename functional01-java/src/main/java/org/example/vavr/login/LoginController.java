package org.example.vavr.login;

import io.vavr.Tuple;
import io.vavr.Tuple2;
import io.vavr.control.Either;

public class LoginController {

    private UserDAO userDAO;

    public LoginController(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    /**
     *
     * @return Either
     *  left - String - error message
     *  right - String - confirmation
     */
    public Either<String, String> performLogin(String name, String password) {
        return validateName(Tuple.of(name, password))
                .flatMap(this::validatePassword)
                .flatMap(this::findUser)
                .flatMap(user -> checkPassword(user, password));
    }

    public Either<String, Tuple2<String, String>> validateName(Tuple2<String, String> t) {
        String name = t._1();
        if (name == null || name.equals(""))
            return Either.left("Invalid Name");

        return Either.right(t);
    }

    public Either<String, Tuple2<String, String>> validatePassword(Tuple2<String, String> t) {
        String password = t._2();
        if (password == null || password.equals(""))
            return Either.left("Invalid Password");

        return Either.right(t);
    }

    public Either<String, User> findUser(Tuple2<String, String> t) {
        var op = userDAO.getUsers().stream()
                .filter(user -> user.name().equals(t._1()))
                .findFirst();
        if (op.isPresent())
            return Either.right(op.get());

        return Either.left("User does not exist");
    }

    public Either<String, String> checkPassword(User user, String password) {
        if (!user.password().equals(password))
            return Either.left("Incorrect password");

        return Either.right(user.name() + " logged");
    }

}
