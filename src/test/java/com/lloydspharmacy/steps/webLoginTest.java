package com.lloydspharmacy.steps;


import com.lloydspharmacy.Helpers.webCommonActions;
import cucumber.api.java.en.And;
import org.openqa.selenium.WebDriver;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.*;



public class webLoginTest {

    WebDriver _driver;
    public int cartCountBefore;
    public int cartCountAfter;

    @Given("^I am on the amazon website$")
    public void I_am_on_the_amazon_website() {

        System.setProperty("webdriver.chrome.driver", "/Users/johnh/IdeaProjects/AmazonDemo/src/test/resources/chromeDriver/mac/chromedriver");
        _driver = new ChromeDriver();
        _driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        _driver.get("http://www.amazon.co.uk");

        }

    @When("^I search for \"([^\"]*)\"$")
    public void iSearchFor(String product) throws Throwable {
        WebElement searchField = _driver.findElement(By.id("twotabsearchtextbox"));
        searchField.sendKeys(product);
        searchField.submit();
    }

    @And("^I choose a product from the list$")
    public void iChooseAProductFromTheList() throws Throwable {

        WebElement firstItem = _driver.findElement(By.xpath("//*[@id='result_2']//h2"));
        firstItem.click();
    }


    @And("^I add the item to the cart$")
    public void iAddTheItemToTheCart() throws Throwable {

        WebDriverWait wait = new WebDriverWait(_driver,10);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.id("add-to-cart-button")));

        cartCountBefore = Integer.parseInt(_driver.findElement(By.id("nav-cart-count")).getText());

        WebElement firstItem = _driver.findElement(By.cssSelector("#add-to-cart-button"));
        firstItem.click();


    }

    @Then("^I see the cart count incremented by one$")
    public void iSeeTheCartCountIncrementedByOne() throws Throwable {
        cartCountAfter = Integer.parseInt(_driver.findElement(By.id("nav-cart-count")).getText());

        if  (cartCountAfter-cartCountBefore!=1) {
            throw new Exception("After adding to cart, the cart count is not incremented ");
        }

    }
}



