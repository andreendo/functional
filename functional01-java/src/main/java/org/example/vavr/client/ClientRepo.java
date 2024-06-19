package org.example.vavr.client;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class ClientRepo {

    // it simulates a DB
    private List<Client> clients = Arrays.asList(
            new Client(1, "John", 0),
            new Client(2, "Jane", 0),
            new Client(3, "Bob", 0),
            new Client(4, "Alice", 0),
            new Client(5, "Tom", 0),
            new Client(6, "Eve", 0),
            new Client(7, "Charlie", 0),
            new Client(8, "David", 0),
            new Client(9, "Grace", 0),
            new Client(10, "Hannah", 0)
    );

    public Optional<Client> get(int id) {
        return clients.stream()
                .filter(client -> client.id() == id)
                .findFirst();
    }
}
