package org.example.vavr.login;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class UserDAO {
    // it simulates a DB with 10 users
    private List<User> users = IntStream.rangeClosed(1, 10)
            .mapToObj(i -> new User("user" + i, "pass" + i))
            .collect(Collectors.toList());
    public List<User> getUsers() {
        return users;
    }
}
