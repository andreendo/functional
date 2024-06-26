package org.example.studentScore;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class GraderTest {

    @Test
    void testNullList() {
        assertEquals("null or empty list", Grader.process(null).getLeft());
    }

    @Test
    void testEmptyList() {
        assertEquals("null or empty list", Grader.process(new ArrayList<>()).getLeft());
    }

    @Test
    void testListWithInvalidScores() {
        var students = Arrays.asList(
                new Student("andy", -40, "")
        );
        assertEquals("Some student with invalid score", Grader.process(students).getLeft());
    }

    @Test
    void testListWithInvalidName() {
        var students = Arrays.asList(
                new Student("", 40, "")
        );
        assertEquals("Some student with invalid name", Grader.process(students).getLeft());
    }

    @Test
    void testListWithValidStudents() {
        var students = Arrays.asList(
                new Student("andy", 40, ""),
                new Student("jessie", 99, ""),
                new Student("james", 80, ""),
                new Student("sam", 50, "")
        );

        assertEquals(
                Arrays.asList(
                        new Student("andy", 40, "F"),
                        new Student("jessie", 99, "A"),
                        new Student("james", 80, "B"),
                        new Student("sam", 50, "C")
                ),
                Grader.process(students).get()
        );
    }
}