public class Main {

    public static void main(String[] args) {

        Card card = new Card("Espadas", "A", 11);

        Player player = new Player("Geovani", 18, 2);

        Deck deck = new Deck(52, "Baralho padrão");

        Game game = new Game("Em andamento", 1);

        System.out.println(card.getValue());
        System.out.println(player.getName());
        System.out.println(deck.getDeckName());
        System.out.println(game.getGameStatus());
    }
}