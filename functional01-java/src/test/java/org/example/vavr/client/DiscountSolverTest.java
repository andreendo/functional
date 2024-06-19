package org.example.vavr.client;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class DiscountSolverTest {

    DiscountSolver solver = new DiscountSolver(new ClientRepo());

    @Test
    void testNullListOfIds() {
        var res = solver.defineDiscounts(null);
        assertEquals("Null list", res.getLeft());
    }

    @Test
    void testEmptyListOfIds() {
        var res = solver.defineDiscounts(new ArrayList<>());
        assertEquals("Empty list", res.getLeft());
    }

    @Test
    void testInvalidClientID() {
        List<Integer> ids = Arrays.asList(1, 2, 33, 5);
        var res = solver.defineDiscounts(ids);
        assertEquals("Invalid client ID", res.getLeft());
    }

    @Test
    void testDiscount20() {
        List<Integer> ids = Arrays.asList(1, 2, 7, 5);
        var res = solver.defineDiscounts(ids);
        assertEquals(4, res.get().size());
        // all with 20% of discount
        assertEquals(4, res.get().stream().filter(c -> c.discount() == 20).toList().size());
    }

    @Test
    void testDiscount10and7() {
        List<Integer> ids = Arrays.asList(7, 5);
        var res = solver.defineDiscounts(ids).get();
        assertEquals(10, res.get(0).discount());
        assertEquals(7, res.get(1).discount());
    }

    @Test
    void testDiscount10() {
        List<Integer> ids = Arrays.asList(7);
        var res = solver.defineDiscounts(ids).get();
        assertEquals(10, res.get(0).discount());
    }
}