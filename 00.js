// 카드 덱 생성
const deck = [];
const suits = ["hearts", "diamonds", "clubs", "spades"];
const ranks = [
  { name: "Ace", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
  { name: "5", value: 5 },
  { name: "6", value: 6 },
  { name: "7", value: 7 },
  { name: "8", value: 8 },
  { name: "9", value: 9 },
  { name: "10", value: 10 },
  { name: "Jack", value: 10 },
  { name: "Queen", value: 10 },
  { name: "King", value: 10 }
];
for (const suit of suits) {
  for (const rank of ranks) {
    deck.push({ suit: suit, rank: rank.name, value: rank.value });
  }
}

// 게임 변수 초기화
let dealerCards = [];
let playerCards = [];
let dealerScore = 0;
let playerScore = 0;
let gameOver = false;

// 요소 선택
const statusElement = document.getElementById("status");
const playerCardsElement = document.getElementById("player-cards");
const dealerCardsElement = document.getElementById("dealer-cards");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const dealButton = document.getElementById("deal-button");

// 카드 한 장 그리기
function drawCard(cardsElement, card) {
  const cardElement =
