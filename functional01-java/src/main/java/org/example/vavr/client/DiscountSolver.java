package org.example.vavr.client;

import io.vavr.control.Either;
import static io.vavr.API.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class DiscountSolver {

    private ClientRepo clientRepo;

    public DiscountSolver(ClientRepo clientRepo) {
        this.clientRepo = clientRepo;
    }

    /**
     * Either is a monad,
     *  flatMap(f)
     *      if the current Either is a right, it applies function f that returns another Either
     *      otherwise, does nothing and returns the current Either (with left value)
     */

    /**
     *
     * @param ids
     * @return left - error message
     *         right - list of clients with discounts
     */
    public Either<String, List<Client>> defineDiscounts(List<Integer> ids) {
        return checkIDs(ids)
                .flatMap(this::retrieveClientObjects)
                .flatMap(this::calculateDiscounts);
    }

    public Either<String, List<Integer>> checkIDs(List<Integer> ids) {
        return Match(ids).of(
                Case($(it -> it == null), Either.left("Null list")),
                Case($(it -> it.isEmpty()), Either.left("Empty list")),
                Case($(), Either.right(ids))
        );
    }

    public Either<String, List<Client>> retrieveClientObjects (List<Integer> ids) {
        var clients = ids.stream()
                .map(clientRepo::get)
                .filter(Optional::isPresent)
                .map(Optional::get)
                .collect(Collectors.toList());

        return Match(clients.size()).of(
                Case($(ids.size()), Either.right(clients)),
                Case($(), Either.left("Invalid client ID"))
        );
    }

    public Either<String, List<Client>> retrieveClientObjectsV0(List<Integer> ids) {
        var clients = new ArrayList<Client>();
        for (int id : ids) {
            var op = clientRepo.get(id);
            if (op.isPresent())
                clients.add(op.get());
            else
                return Either.left("Invalid client ID");
        }

        return Either.right(clients);
    }

    public Either<String, List<Client>> calculateDiscounts(List<Client> clients) {
        return Either.right(
                Match(clients.size()).of(
                        Case($(len -> len >= 3), apply20Discount(clients)),
                        Case($(), apply10and7Discount(clients))
                )
        );
    }

    public List<Client> apply20Discount(List<Client> clients) {
        return clients.stream()
                .map(c -> new Client(c.id(), c.name(), 20))
                .collect(Collectors.toList());
    }

    public List<Client> apply10and7Discount(List<Client> clients) {
        return IntStream.range(0, clients.size())
                .mapToObj(i -> {
                    var discount = 10 - (i * 3);
                    var c = clients.get(i);
                    return new Client(c.id(), c.name(), discount);
                })
                .collect(Collectors.toList());
    }

    public List<Client> apply10and7DiscountV0(List<Client> clients) {
        AtomicInteger discount = new AtomicInteger(10);
        return clients.stream()
                .map(c -> {
                    var nc = new Client(c.id(), c.name(), discount.get());
                    discount.addAndGet(-3);
                    return nc;
                })
                .collect(Collectors.toList());
    }

    public static void main(String[] args) {
        var solver = new DiscountSolver(new ClientRepo());
//        List<Integer> ids = Arrays.asList(1, 2, 5);
        List<Integer> ids = Arrays.asList(1, 5);
//        List<Integer> ids = null;
//        List<Integer> ids = Arrays.asList();
//        List<Integer> ids = Arrays.asList(1, 2, 33);
        solver.defineDiscounts(ids)
                .peek(clients -> System.out.println(clients))
                .peekLeft(errorMessage -> System.out.println(errorMessage));
    }

}
