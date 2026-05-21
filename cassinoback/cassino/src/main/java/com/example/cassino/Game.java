public class Game {

	private String gameStatus;
	private int round;

	public Game(String gameStatus, int round) {
		this.gameStatus = gameStatus;
		this.round = round;
	}

	public String getGameStatus() {
		return gameStatus;
	}

	public void setGameStatus(String gameStatus) {
		this.gameStatus = gameStatus;
	}

	public int getRound() {
		return round;
	}

	public void setRound(int round) {
		this.round = round;
	}
}