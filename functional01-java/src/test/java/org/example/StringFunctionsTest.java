package org.example;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

import static org.example.StringFunctions.*;

class StringFunctionsTest {


    @ParameterizedTest
    @CsvSource({
            "https://gist.github.com/thaleswinther/e0d91cc29b67eb7a8d473386fe48e068, e0d91cc29b67eb7a8d473386fe48e068",
            "https://gist.github.com/Rafaelsonsons/0aeadf7c286917393baddfb631028f0d, 0aeadf7c286917393baddfb631028f0d",
            "https://gist.github.com/Mauricio-HF/cfe1c972ce5f6cb3f1a9790b51a56ec1, cfe1c972ce5f6cb3f1a9790b51a56ec1"
    })
    public void testExtractGistIDSuccessful(String url, String expectedId) {
        assertEquals(expectedId, extractGistID(url));
    }

    @ParameterizedTest
    @CsvSource({
            "https://gist.github.com/thaleswinther/",
            "https://gist.github.com/Rafaelsonsons/0aeadf7c2869173",
            "https"
    })
    public void testExtractGistIDError(String url) {
        assertEquals("INVALID", extractGistID(url));
    }

    @Test
    public void testCountWords() {
        var res = countWords("andre andre andre", Arrays.asList("and", "dr", "eee"));
        assertEquals(3, res.get("and"));
        assertEquals(3, res.get("dr"));
        assertEquals(0, res.get("eee"));
    }
}