package Groceries;

public class Cereal extends Grocery{

    private String name;
    private double price;
    private String barcode;
    private String boxSize;


    public Cereal(String name, double price, String barcode, String boxSize) {
        super(name, price, barcode);
        this.boxSize = boxSize;
    }


}
