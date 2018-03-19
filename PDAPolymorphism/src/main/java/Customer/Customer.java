package Customer;

import Groceries.Grocery;


public class Customer {

    private String name;
    private double wallet;

    public Customer(String name, double wallet) {
        this.name = name;
        this.wallet = wallet;
    }

    public String getName() {
        return name;
    }

    public double getWallet() {
        return wallet;
    }

    public void purchaseGrocery(Grocery grocery) {
        this.wallet -= grocery.getPrice();
    }

}
