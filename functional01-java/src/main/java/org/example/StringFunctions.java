package org.example;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class StringFunctions {

    public static String extractGistID(String url) {
        // Define a regex pattern to match the ID at the end of the URL
        String regex = ".*/([a-fA-F0-9]{32})$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(url);

        // If the pattern matches, return the captured ID
        if (matcher.find()) {
            return matcher.group(1);
        } else {
            return "INVALID";
        }
    }

    public static Map<String, Integer> countWords(String text, List<String> words) {
        return words.stream()   // may be parallel
                .collect(Collectors.toMap(
                            word -> word,   // key mapper
                            word -> (int) countOccurrences(text, word) //value mapper
                        )
                );
    }

    private static int countOccurrences(String text, String word) {
        int count = 0;
        int index = 0;

        while ((index = text.indexOf(word, index)) != -1) {
            count++;
            index += word.length();
        }

        return count;
    }
}
