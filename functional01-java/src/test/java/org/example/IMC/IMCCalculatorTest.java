package org.example.IMC;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class IMCCalculatorTest {

    @Test
    void classifyPerson() {
        var res = IMCCalculator.classifyPerson(new Person("andre", 1.80, 70));
        assertTrue(res.isRight());
        assertEquals("normal", res.get().classification());
        assertEquals(21.6, res.get().imc(), 0.01);
    }

    @Test
    void classifyPersonInvalidHeight() {
        var res = IMCCalculator.classifyPerson(new Person("andre", -1.80, 70));
        assertTrue(res.isLeft());
        assertEquals("Invalid height", res.getLeft());
    }

    @Test
    void classifyPersonInvalidWeight() {
        var res = IMCCalculator.classifyPerson(new Person("andre", 1.80, -70));
        assertTrue(res.isLeft());
        assertEquals("Invalid weight", res.getLeft());
    }
}