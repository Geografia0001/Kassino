public class Player {

    private String name;
    private int score;
    private int cardsAmount;

    public Player(String name, int score, int cardsAmount) {
        this.name = name;
        this.score = score;
        this.cardsAmount = cardsAmount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getCardsAmount() {
        return cardsAmount;
    }

    public void setCardsAmount(int cardsAmount) {
        this.cardsAmount = cardsAmount;
    }
}