public class Card {

    private String suit;
    private String value;
    private int points;

    public Card(String suit, String value, int points) {
        this.suit = suit;
        this.value = value;
        this.points = points;
    }

    public String getSuit() {
        return suit;
    }

    public void setSuit(String suit) {
        this.suit = suit;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}