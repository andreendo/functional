package org.example.vavr;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import static org.example.vavr.Vavr1.*;

class Vavr1Test {

    @Test
    void testReadLinesFromFileSuccess() {
        var res = readLinesFromFile("./urls.txt");
        assertTrue(res.isSuccess());
        assertEquals(13, res.get().size());
    }

    @Test
    void testReadLinesFromFileError() {
        var res = readLinesFromFile("./urls2.txt");
        assertTrue(res.isFailure());
        res.onFailure(e -> {
           System.out.println(e);
        });
    }
}