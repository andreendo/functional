package org.example;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

import static org.example.ListFunctions.partitionByDuplicated;

class ListFunctionsTest {

    @Test
    public void test1() {
        var list1 = Arrays.asList(
                "https://gist.github.com/thaleswinther/e0d91cc29b67eb7a8d473386fe48e068",
                "https://gist.github.com/Rafaelsonsons/0aeadf7c286917393baddfb631028f0d",
                "https://gist.github.com/YaboiAst/a4bb1eb42c1ec97f8b1fdfc7af0dea4b",
                "https://gist.github.com/mvtehutd/dd5fe7270ac6bbfed0335026d7f23e0f",
                "https://gist.github.com/Mauricio-HF/cfe1c972ce5f6cb3f1a9790b51a56ec1",
                "https://gist.github.com/matheusranzani/d066c415b21bcbdb3fbdafd98ac8fd05",
                "https://gist.github.com/mvtehutd/dd5fe7270ac6bbfed0335026d7f23e0f"
        );
        var res = partitionByDuplicated.apply(list1);
        assertEquals(5, res.getLeft().size()); // unique
        assertEquals(2, res.getRight().size()); // duplicated

    }

}