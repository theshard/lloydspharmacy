$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Search and buy a product",
  "description": "As a shopper of amazon.co.uk\nI want to view a list of products\nSo I can select some to purchase",
  "id": "search-and-buy-a-product",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Search for a product and add to cart",
  "description": "",
  "id": "search-and-buy-a-product;search-for-a-product-and-add-to-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on the amazon website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for \"\u003cproduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I choose a product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add the item to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see the cart count incremented by one",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "search-and-buy-a-product;search-for-a-product-and-add-to-cart;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 15,
      "id": "search-and-buy-a-product;search-for-a-product-and-add-to-cart;;1"
    },
    {
      "cells": [
        "philips shaver"
      ],
      "line": 16,
      "id": "search-and-buy-a-product;search-for-a-product-and-add-to-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Search for a product and add to cart",
  "description": "",
  "id": "search-and-buy-a-product;search-for-a-product-and-add-to-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on the amazon website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for \"philips shaver\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I choose a product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add the item to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see the cart count incremented by one",
  "keyword": "Then "
});
formatter.match({
  "location": "webLoginTest.I_am_on_the_amazon_website()"
});
formatter.result({
  "duration": 5102647739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "philips shaver",
      "offset": 14
    }
  ],
  "location": "webLoginTest.iSearchFor(String)"
});
formatter.result({
  "duration": 4873967928,
  "status": "passed"
});
formatter.match({
  "location": "webLoginTest.iChooseAProductFromTheList()"
});
formatter.result({
  "duration": 3965791514,
  "status": "passed"
});
formatter.match({
  "location": "webLoginTest.iAddTheItemToTheCart()"
});
formatter.result({
  "duration": 1944563555,
  "status": "passed"
});
formatter.match({
  "location": "webLoginTest.iSeeTheCartCountIncrementedByOne()"
});
formatter.result({
  "duration": 101286326,
  "status": "passed"
});
});