package Groceries;

public class Toothpaste extends Grocery{
    private String name;
    private double price;
    private String barcode;
    private String whiteningLevel;


    public Toothpaste(String name, double price, String barcode, String whiteningLevel) {
        super(name, price, barcode);
        this.whiteningLevel = whiteningLevel;
    }


}
