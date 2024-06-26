package org.example.personData;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class ExtractorTest {

    @Test
    void testNullList() {
        assertEquals("null or empty list", Extractor.process(null).getLeft());
    }

    @Test
    void testEmptyList() {
        assertEquals("null or empty list", Extractor.process(new ArrayList<>()).getLeft());
    }

    @ParameterizedTest
    @CsvSource({
            "''",
            "andre$",
            "aaa &ndo"
    })
    void testInvalidList(String name) {
        var people = Arrays.asList(
                new Person(name, 1984)
        );
        assertEquals("Person with invalid name", Extractor.process(people).getLeft());
    }

    @Test
    void testValidList() {
        var people = Arrays.asList(
                new Person("andre", 1984),
                new Person("andre endo", 1990),
                new Person("and yu yu haki", 2000)
        );
        assertEquals(Arrays.asList(
                new PersonData(1, 40),
                new PersonData(2, 34),
                new PersonData(4, 24)
        ), Extractor.process(people).get());
    }
}