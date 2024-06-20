package org.example.gist_tasks.gist;

import org.example.gist_tasks.gist.GistConnector;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class GistConnectorTest {

    GistConnector conn = new GistConnector();

    @Test
    void retrieveSuccessfully() {
        var res = conn.retrieve("46d237a52b41f23b764afd3a2091af14");
        assertTrue(res.isPresent());
    }

    @Test
    void retrieveError() {
        var res = conn.retrieve("aaa");
        assertTrue(res.isEmpty());
    }
}