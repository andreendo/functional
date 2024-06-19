package org.example.vavr.login;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.*;

    class LoginControllerTest {
    LoginController loginController = new LoginController(new UserDAO());
    @ParameterizedTest
    @CsvSource({
            ",,Invalid Name",
            "user,,Invalid Password",
            "user,pass,User does not exist",
            "user1,pass,Incorrect password"
    })
    void performLoginWithSomeError(String name, String password, String expectedErrorMessage) {
        var res = loginController.performLogin(name, password);
        assertTrue(res.isLeft()); // error
        assertEquals(expectedErrorMessage, res.getLeft());
    }

    @Test
    void performLoginWithSuccess() {
        var res = loginController.performLogin("user4", "pass4");
        assertTrue(res.isRight()); // success
        assertEquals("user4 logged", res.get());
    }
}