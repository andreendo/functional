package org.example.gist_tasks.gist;

import java.util.List;

public record GistInfo(int numberOfFiles, List<String> fileContents) { }
