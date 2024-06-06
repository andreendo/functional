package org.example.gist;

import java.util.List;

public record GistInfo(int numberOfFiles, List<String> fileContents) { }
