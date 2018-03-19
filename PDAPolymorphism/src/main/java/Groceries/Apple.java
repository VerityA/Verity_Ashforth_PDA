package Groceries;

public class Apple extends Grocery {

    private String name;
    private double price;
    private String barcode;
    private double weight;


    public Apple(String name, double price, String barcode, double weight) {
        super(name, price, barcode);
        this.weight = weight;
    }

}
