package com.lloydspharmacy;

import static org.junit.Assert.*;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)

@CucumberOptions(
        format = {"pretty","html:target/cucumber-html-report","html:reports/test-report"},
        features = "src/test/java/com/lloydspharmacy/Features"
)
public class cucumberRunnerTest {

}