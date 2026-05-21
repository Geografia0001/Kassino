public class Deck {

    private int totalCards;
    private String deckName;

    public Deck(int totalCards, String deckName) {
        this.totalCards = totalCards;
        this.deckName = deckName;
    }

    public int getTotalCards() {
        return totalCards;
    }

    public void setTotalCards(int totalCards) {
        this.totalCards = totalCards;
    }

    public String getDeckName() {
        return deckName;
    }

    public void setDeckName(String deckName) {
        this.deckName = deckName;
    }
}