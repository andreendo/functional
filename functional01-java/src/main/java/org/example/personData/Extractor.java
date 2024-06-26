package org.example.personData;

import io.vavr.control.Either;

import java.util.List;

public class Extractor {

    public static Either<String, List<PersonData>> process(List<Person> people) {
        return validateList(people)
                .flatMap(Extractor::validatePerson)
                .map(Extractor::collectPersonData);
    }

    static Either<String, List<Person>> validateList(List<Person> list) {
        return list == null || list.isEmpty()
                ? Either.left("null or empty list")
                : Either.right(list);
    }

    static Either<String, List<Person>> validatePerson(List<Person> people) {
        return people.parallelStream().anyMatch(p -> !isValidName(p.name()))
                ? Either.left("Person with invalid name")
                : Either.right(people);
    }

    public static boolean isValidName(String name) {
        if (name == null) {
            return false;
        }
        // Regular expression to check if the name contains only alphabetic characters and spaces
        return name.matches("[A-Za-z]+( [A-Za-z]+)*");
    }

    public static List<PersonData> collectPersonData(List<Person> people) {
        return people.parallelStream()
                .map(Extractor::extractPersonData).toList();
    }

    static PersonData extractPersonData(Person person) {
        return new PersonData(
                person.name().split(" ").length,
                2024 - person.YearOfBirth()
        );
    }
}
