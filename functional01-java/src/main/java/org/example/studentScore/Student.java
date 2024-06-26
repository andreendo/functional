package org.example.studentScore;

public record Student(String name, int score, String range) {

    public Student withRange(String grade) {
        return new Student(this.name(), this.score(), grade);
    }
}
