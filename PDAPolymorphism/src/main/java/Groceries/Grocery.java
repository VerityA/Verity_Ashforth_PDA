package Groceries;

public abstract class Grocery {

    private String name;
    private double price;
    private String barcode;

    public Grocery(String name, double price, String barcode) {
        this.name = name;
        this.price = price;
        this.barcode = barcode;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public String getBarcode() {
        return barcode;
    }


}
