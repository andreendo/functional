package org.example.studentScore;

import static io.vavr.API.*;
import io.vavr.control.Either;
import java.util.List;


public class Grader {

    public static Either<String, List<Student>> process(List<Student> students) {
        return validateList(students)
                .flatMap(Grader::validateStudents)
                .map(Grader::gradeStudents);
    }

    static Either<String, List<Student>> validateList(List<Student> list) {
        return list == null || list.isEmpty()
            ? Either.left("null or empty list")
            : Either.right(list);
    }

    static Either<String, List<Student>> validateListV1(List<Student> list) {
        return Match(list).of(
                Case($(l -> l == null || l.isEmpty()), () -> Either.left("null or empty list")),
                Case($(), () -> Either.right(list))
        );
    }

    static boolean hasStudentWithInvalidScore(List<Student> students) {
        return students.parallelStream().anyMatch(e -> e.score() < 0 || e.score() > 100);
    }

    static boolean hasStudentWithInvalidName(List<Student> students) {
        return students.parallelStream().anyMatch(e -> e.name().trim().equals(""));
    }

    static Either<String, List<Student>> validateStudents(List<Student> students) {
        return hasStudentWithInvalidScore(students)
                ? Either.left("Some student with invalid score")
                : hasStudentWithInvalidName(students)
                    ? Either.left("Some student with invalid name")
                    : Either.right(students);
    }

    static Either<String, List<Student>> validateStudentsV0(List<Student> students) {
        if (students.stream().anyMatch(e -> e.score() < 0 || e.score() > 100)) {
            return Either.left("Some student with invalid score");
        }

        if (students.stream().anyMatch(e -> e.name().trim().equals(""))) {
            return Either.left("Some student with invalid name");
        }

        return Either.right(students);
    }

    static List<Student> gradeStudents(List<Student> students) {
        return students.parallelStream()
                .map(Grader::gradeStudent)
                .toList();
    }

    static Student gradeStudent(Student student) {
        return Match(student.score()).of(
                Case($(score -> score >= 90), () -> student.withRange("A")),
                Case($(score -> score >= 70), () -> student.withRange("B")),
                Case($(score -> score >= 50), () -> student.withRange("C")),
                Case($(), () -> student.withRange("F"))
        );
    }
}
