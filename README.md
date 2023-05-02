package TETRIS;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class BLACKJACK {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<String> deck = newDeck();
        Collections.shuffle(deck);
        int playerScore = 0;
        int dealerScore = 0;

        // initial deal
        for (int i = 0; i < 2; i++) {
            playerScore += getCardValue(deck.get(0));
            deck.remove(0);
            dealerScore += getCardValue(deck.get(0));
            deck.remove(0);
        }

        // player's turn
        while (true) {
            System.out.println("Your score: " + playerScore);
            System.out.println("Dealer's score: " + dealerScore);
            System.out.print("Do you want to hit or stadhond? ");
            String choice = scanner.nextLine().toLowerCase();
            if (choice.equals("hit")) {
                playerScore += getCardValue(deck.get(0));
                deck.remove(0);
                if (playerScore > 21) {
                    System.out.println("You busted! Dealer wins.");
                    return;
                }
            } else if (choice.equals("stand")) {
                break;
            } else {
                System.out.println("Invalid choice, please try again.");
            }
        }

        // dealer's turn
        while (dealerScore < 17) {
            dealerScore += getCardValue(deck.get(0));
            deck.remove(0);
            if (dealerScore > 21) {
                System.out.println("Dealer busted! You win.");
                return;
            }
        }

        // compare scores
        if (playerScore > dealerScore) {
            System.out.println("You win!");
        } else if (playerScore < dealerScore) {
            System.out.println("Dealer wins.");
        } else {
            System.out.println("It's a tie.");
        }
    }

    private static List<String> newDeck() {
        List<String> deck = new ArrayList<>();
        for (int i = 2; i <= 10; i++) {
            for (int j = 0; j < 4; j++) {
                deck.add(Integer.toString(i));
            }
        }
        for (int i = 0; i < 16; i++) {
            deck.add("A");
        }
        for (int i = 0; i < 12; i++) {
            deck.add("K");
            deck.add("Q");
            deck.add("J");
        }
        return deck;
    }

    private static int getCardValue(String card) {
        if (card.equals("A")) {
            return 11;
        } else if (card.equals("K") || card.equals("Q") || card.equals("J")) {
            return 10;
        } else {
            return Integer.parseInt(card);
        }
    }
}
