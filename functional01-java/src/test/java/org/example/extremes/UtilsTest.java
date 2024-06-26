package org.example.extremes;

import io.vavr.control.Either;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class UtilsTest {

    @Test
    void testUpdateExtreme1() {
        var e1 = new Extremes(1, 1, 10, 2);
        var e2 = new Extremes(-5, 3, -5, 3);
        var res = Utils.updateExtreme(e1, e2);
        assertEquals(new Extremes(-5, 3, 10, 2), res);
    }

    @Test
    void testUpdateExtreme2() {
        var e1 = new Extremes(1, 1, 10, 2);
        var e2 = new Extremes(50, 3, 50, 3);
        var res = Utils.updateExtreme(e1, e2);
        assertEquals(new Extremes(1, 1, 50, 3), res);
    }

    @Test
    void testFindExtremesInOrderedArray() {
        List<Integer> arr = Arrays.asList(1, 2, 3, 4, 5, 6, 7);
        Either<String, Extremes> res = Utils.findExtremes(arr);
        assertTrue(res.isRight());
        assertEquals(new Extremes(1, 0, 7, 6), res.get());
    }

    @Test
    void testFindExtremesInUnorderedArray() {
        List<Integer> arr = Arrays.asList(1, 2, -3, 4, 55, 6, 7);
        Either<String, Extremes> res = Utils.findExtremes(arr);
        assertTrue(res.isRight());
        assertEquals(new Extremes(-3, 2, 55, 4), res.get());
    }

    @Test
    void testFindExtremesInNullArray() {
        List<Integer> arr = null;
        Either<String, Extremes> res = Utils.findExtremes(arr);
        assertTrue(res.isLeft());
        assertEquals("array cannot be null", res.getLeft());
    }

    @Test
    void testFindExtremesInEmptyArray() {
        List<Integer> arr = Arrays.asList();
        Either<String, Extremes> res = Utils.findExtremes(arr);
        assertTrue(res.isLeft());
        assertEquals("array empty", res.getLeft());
    }
}