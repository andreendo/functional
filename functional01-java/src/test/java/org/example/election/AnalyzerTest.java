package org.example.election;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class AnalyzerTest {

    @Test
    void testNullLlist() {
        List<Candidate> candidates = null;
        var res = Analyzer.analyse(candidates);
        assertEquals("List null or empty", res.getLeft());
    }

    @Test
    void testEmptylist() {
        List<Candidate> candidates = Arrays.asList();
        var res = Analyzer.analyse(candidates);
        assertEquals("List null or empty", res.getLeft());
    }

    @Test
    void testOneCandidate() {
        List<Candidate> candidates = Arrays.asList(new Candidate('M', 40));
        var res = Analyzer.analyse(candidates);
        assertEquals(new Stats(0, 1, 40, "no adversaries"), res.get());
    }

    @Test
    void testTwoCandidates() {
        List<Candidate> candidates = Arrays.asList(
                new Candidate('F', 40),
                new Candidate('F', 50)
        );
        var res = Analyzer.analyse(candidates);
        assertEquals(new Stats(2, 0, 45, "polarized"), res.get());
    }

    @Test
    void testMoreThanTwoCandidates() {
        List<Candidate> candidates = Arrays.asList(
                new Candidate('F', 40),
                new Candidate('M', 50),
                new Candidate('F', 40),
                new Candidate('M', 50)
        );
        var res = Analyzer.analyse(candidates);
        assertEquals(new Stats(2, 2, 45, "normal"), res.get());
    }
}