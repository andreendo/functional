package org.example;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class UrlFunctions {

    public static boolean isURLOnline(String urlString) {
        try {
            URL url = new URL(urlString);
            var conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("HEAD");
            conn.setConnectTimeout(5000); // Set timeout to 5 seconds
            conn.setReadTimeout(5000);    // Set read timeout to 5 seconds
            try {
                int responseCode = conn.getResponseCode();
                return (200 <= responseCode && responseCode <= 299);
            } finally {
                conn.disconnect();
            }
        } catch (Exception e) {
            // any exception return false
            return false;
        }
    }

//    public static List<Boolean> checkOnline(List<String> urls) {
//        return urls.stream()   // -> use parallelStream
//                .map(UrlFunctions::isURLOnline)
//                .collect(Collectors.toList());
////        System.out.println(urls);
////        System.out.println(online);
//    }
}
