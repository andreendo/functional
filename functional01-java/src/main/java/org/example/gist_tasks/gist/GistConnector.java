package org.example.gist_tasks.gist;

import org.kohsuke.github.GHGistFile;
import org.kohsuke.github.GitHub;
import org.kohsuke.github.GitHubBuilder;

import java.io.IOException;
import java.util.Optional;

public class GistConnector {

    private GitHub github = null;

    public GistConnector() {
        try {
            start();
        } catch (IOException e) { }
    }

    private void start() throws IOException {
        // Add your oauth token in file '.github': oauth=<your_token_here>.
        // See: https://docs.github.com/pt/rest/authentication/authenticating-to-the-rest-api
        github = GitHubBuilder.fromPropertyFile("./.github").build();
    }

    public Optional<GistInfo> retrieve(String gistID) {
        try {
            if (github == null) start();
            var gistFiles = github.getGist(gistID).getFiles().values();
            return Optional.of(new GistInfo(
                    gistFiles.size(),
                    gistFiles.stream().map(GHGistFile::getContent).toList()
            ));
        } catch (IOException e) {
            // return empty if some error occurs.
            return Optional.empty();
        }
    }
}
