
Feature:  Search and buy a product
  As a shopper of amazon.co.uk
  I want to view a list of products
  So I can select some to purchase
  Scenario Outline:  Search for a product and add to cart
    Given  I am on the amazon website
    When   I search for "<product>"
    And    I choose a product from the list
    And    I add the item to the cart
    Then   I see the cart count incremented by one


    Examples:
    | product |
    | philips shaver |