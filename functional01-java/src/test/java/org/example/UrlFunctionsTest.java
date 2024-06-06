package org.example;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

import static org.example.UrlFunctions.*;

class UrlFunctionsTest {

    @Test
    void testExistingURL1() {
        assertTrue(isURLOnline("https://google.com"));
    }

    @Test
    void testExistingURL2() {
        assertTrue(isURLOnline("https://gist.github.com/thaleswinther/e0d91cc29b67eb7a8d473386fe48e068"));
    }

    @Test
    void testUnexistingURL() {
        assertFalse(isURLOnline("https://gist.github.com/thaleswinther/e0d91cc29b67e"));
    }

    @Test
    void testMalformedURL() {
        assertFalse(isURLOnline("test@gmail.com"));
    }

}